import React from 'react';
import {TasksPropsType} from "./Tasks";
import {TasksType} from "./TodoList";

type taskItemType=TasksType&{
    deleteTask:(id: number) => void
    toggleTask:(taskId:number)=>void
}

const TaskItem = (props: taskItemType) => {
    return (
            <li>
                <input onClick={()=>{props.toggleTask(props.id)}} type="checkbox" checked={props.isDone}/>
                <span>{props.title}</span>
                <button onClick={() => {props.deleteTask(props.id)}}>X
                </button>
            </li>
    );
};

export default TaskItem;