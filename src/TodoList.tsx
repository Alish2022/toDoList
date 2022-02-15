import React from 'react';
import TodoListHeader from "./TodoListHeader";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import StatusButtons from "./StatusButtons";
import {isDoneType} from "./App"

type TodoListPropsType={
    headerTitle: string
    tasks: Array<TasksType>
    deleteTask:(id:string)=>void
    setTasksFilter:(isDone:isDoneType)=>void
    addTask:(newTask:string)=>void
    toggleTask:(taskId:string,value:boolean)=>void
    filter:isDoneType
}

export type TasksType={
    id:string
    title:string
    isDone:boolean
}

const TodoList = (props:TodoListPropsType) => {
    return (
        <div>
            <TodoListHeader headerTitle={props.headerTitle}/>
            <AddTask addTask={props.addTask}/>
            <Tasks toggleTask={props.toggleTask}  deleteTask={props.deleteTask} tasks={props.tasks} />
            <StatusButtons filter={props.filter} setTasksFilter={props.setTasksFilter} />
        </div>
    );
};

export default TodoList;