import React from 'react';
import TodoListHeader from "./TodoListHeader";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import StatusButtons from "./StatusButtons";

type TodoListPropsType={
    headerTitle: string
    tasks: Array<TasksType>
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
            <AddTask/>
            <Tasks tasks={props.tasks} />
            <StatusButtons />
        </div>
    );
};

export default TodoList;