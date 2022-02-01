import React from 'react';
import {TasksType} from "./TodoList";

const TaskItem = (props:TasksType) => {
    return (
        <div>
            <li><input type="checkbox" checked={props.isDone}/> <span>{props.title}</span></li>
        </div>
    );
};

export default TaskItem;