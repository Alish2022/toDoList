import React from 'react';
import TodoListHeader from "./TodoListHeader";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import StatusButtons from "./StatusButtons";
import {isDoneType} from "./App"

type TodoListPropsType={
    headerTitle: string
    tasks: Array<TasksType>
    deleteTask:(id:number)=>void
    setTasksFilter:(isDone:isDoneType)=>void
    addTask:(newTask:string)=>void
    toggleTask:(taskId:number)=>void
}

export type TasksType={
    id:number
    title:string
    isDone:boolean
}

const TodoList = (props:TodoListPropsType) => {
    return (
        <div>
            <TodoListHeader headerTitle={props.headerTitle}/>
            <AddTask addTask={props.addTask}/>
            <Tasks toggleTask={props.toggleTask}  deleteTask={props.deleteTask} tasks={props.tasks} />
            <StatusButtons setTasksFilter={props.setTasksFilter} />
        </div>
    );
};

export default TodoList;