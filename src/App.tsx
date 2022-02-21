import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import { v1 } from 'uuid';

export type isDoneType="Active"|"All"|"Completed"

function App() {

    const data1={
        headerTitle:"What to learn" ,
        tasks:[
            {id:v1(), title:"js сss", isDone:true},
            {id:v1(),title:"html",isDone:false},
            {id:v1(),title:"react",isDone:true}
        ]
    }

    let [tasks,setTasks]=useState(data1.tasks)
    let [filter,setFilter]=useState<isDoneType>("All")

    let filteredTasks=tasks

    const addTask=(newTask:string)=>{
        let task={id:v1(), title:newTask, isDone:false}
        const newTasks=[task,...tasks]
        setTasks(newTasks)
    }

    const toggleTask=(taskId:string,value:boolean)=>{
        let newStatus=tasks.map((task)=>{
            if (taskId===task.id){return {...task,isDone:value}}
            return task
        })
        setTasks(newStatus)
    }

    const setTasksFilter=(isDone:isDoneType)=>{
        setFilter(isDone)
    }
    if (filter==="Active"){
        filteredTasks=tasks.filter((t)=>t.isDone===false)
    }
    if (filter==="Completed"){
        filteredTasks=tasks.filter((t)=>t.isDone===true)
    }

    const deleteTask=(id:string)=>{
        let newData=tasks.filter((t)=>id!==t.id)
        setTasks(newData)
    }

    return (
        <div className="App">
            <TodoList toggleTask={toggleTask}
                      addTask={addTask}
                      setTasksFilter={setTasksFilter}
                      deleteTask={deleteTask}
                      tasks={filteredTasks}
                      headerTitle={data1.headerTitle}
                      filter={filter}
            />
        </div>
    );
}

export default App;
