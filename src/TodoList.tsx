import React from 'react';
import TodoListHeader from "./TodoListHeader";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import StatusButtons from "./StatusButtons";
import {isDoneType, tasksForToDoListsType, taskType} from "./App"
import AddItem from "./AddItem";

type TodoListPropsType={
    toDoListId:string
    headerTitle: string
    tasks: Array<taskType>
    deleteTask:(idTask:string,toDoListId:string)=>void
    setTasksFilter:(isDone:isDoneType,toDoListId:string)=>void
    addTask:(newTask:string,toDoListId:string)=>void
    toggleTask:(taskId:string,value:boolean,toDoListId:string)=>void
    filter:isDoneType
    editTask:(toDoListId:string,taskId:string,newTitle:string)=>void
    editTitle:(toDoListId:string,newTitle:string)=>void
    deleteToDoList:(toDoListId:string)=>void
}

export type TasksType={
    id:string
    title:string
    isDone:boolean
}

const TodoList = (props:TodoListPropsType) => {

    const setTasksFilter=(isDone:isDoneType)=>{
        props.setTasksFilter(isDone,props.toDoListId)
    }

    const deleteTask=(idTask:string)=>{
        props.deleteTask(idTask,props.toDoListId)
    }

    const toggleTask=(taskId:string,value:boolean)=>{
        props.toggleTask(taskId,value,props.toDoListId)
    }

    const addTask=(newTask:string)=>{
        props.addTask(newTask,props.toDoListId)
    }

    const editTask=(taskId:string,newTitle:string)=>{
        props.editTask(props.toDoListId,taskId,newTitle)
    }

    const editTitle=(newTitle:string)=>{
        props.editTitle(props.toDoListId,newTitle)
    }

    const deleteToDoList=()=>{
        props.deleteToDoList(props.toDoListId)
    }

    return (
        <div>
            <TodoListHeader deleteToDoList={deleteToDoList} editTitle={editTitle} headerTitle={props.headerTitle}/>
            <AddTask addTask={addTask}/>
            <Tasks editTask={editTask} toggleTask={toggleTask}  deleteTask={deleteTask} tasks={props.tasks} />
            <StatusButtons filter={props.filter} setTasksFilter={setTasksFilter} />
        </div>
    );
};

export default TodoList;