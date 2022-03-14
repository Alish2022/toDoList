import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from 'uuid';
import AddItem from "./AddItem";

export type isDoneType = "Active" | "All" | "Completed"

type toDoListType = {
    id: string,
    title: string,
    filter: isDoneType
}

export type tasksForToDoListsType = {
    [key: string]: Array<taskType>
}

export type taskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    const toDoListsData: Array<toDoListType> = [
        {id: v1(), title: "What to learn", filter: "All"},
        {id: v1(), title: "What to eat", filter: "All"},
        {id: v1(), title: "What to drink", filter: "All"},
    ]

    const tasksForToDoLists: tasksForToDoListsType = {
        [toDoListsData[0].id]: [
            {id: v1(), title: "js сss", isDone: true},
            {id: v1(), title: "html", isDone: false},
            {id: v1(), title: "react", isDone: true}
        ],
        [toDoListsData[1].id]: [
            {id: v1(), title: "apple", isDone: true},
            {id: v1(), title: "banana", isDone: false},
            {id: v1(), title: "potato", isDone: true}
        ],
        [toDoListsData[2].id]: [
            {id: v1(), title: "jus", isDone: true},
            {id: v1(), title: "milk", isDone: false},
            {id: v1(), title: "water", isDone: true}
        ]
    }

    let [tasks, setTasks] = useState<tasksForToDoListsType>(tasksForToDoLists)
    let [toDoLists, setToDoLists] = useState<Array<toDoListType>>(toDoListsData)

    const addToDoList=(title:string)=>{
        const newToDoList:toDoListType={id:v1(),title:title,filter:"All"}
        const newTodoLists=[...toDoLists,newToDoList]
        setToDoLists(newTodoLists)
    }

    const toDoListForRender = toDoLists.map(t => {
        const addTask = (newTask: string, toDoListId: string) => {
            let task = {id: v1(), title: newTask, isDone: false}
            const newTasks = {...tasks, [toDoListId]: [task, ...tasks[toDoListId]]}
            setTasks(newTasks)
        }
        const toggleTask = (taskId: string, value: boolean, toDoListId: string) => {
            const newTasksArray = tasks[toDoListId].map(t => taskId === t.id ? {...t, isDone: value} : t)
            const newTasks = {...tasks, [toDoListId]: newTasksArray}
            setTasks(newTasks)
        }
        const deleteTask = (taskId: string, toDoListId: string) => {
            const newTasksArray = tasks[toDoListId].filter(t => taskId !== t.id)
            const newTasks = {...tasks, [toDoListId]: newTasksArray}
            setTasks(newTasks)
        }
        const setTasksFilter = (isDone: isDoneType, toDoListId: string) => {
            const newToDoLists = toDoLists.map(t => t.id === toDoListId ? {...t, filter: isDone} : t)
            setToDoLists(newToDoLists)
        }
        let filteredTasks = tasks[t.id]
        if (t.filter === "Active") {
            filteredTasks = tasks[t.id].filter((t) => t.isDone === false)
        }
        if (t.filter === "Completed") {
            filteredTasks = tasks[t.id].filter((t) => t.isDone === true)
        }

        return <TodoList
            key={t.id}
            toDoListId={t.id}
            toggleTask={toggleTask}
            addTask={addTask}
            setTasksFilter={setTasksFilter}
            deleteTask={deleteTask}
            tasks={filteredTasks}
            headerTitle={t.title}
            filter={t.filter}/>
    })

    return (
        <div className="App">
            <div><AddItem addItem={addToDoList}/></div>
            {toDoListForRender}
        </div>
    );
}

export default App;
