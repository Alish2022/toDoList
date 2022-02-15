import React, {MouseEvent} from 'react';
import {TasksType} from "./TodoList";

type taskItemType = TasksType & {
    deleteTask: (id: string) => void
    toggleTask: (taskId: string, value: boolean) => void
}

const TaskItem = (props: taskItemType) => {

    const onClickInputHandler = (e: MouseEvent<HTMLInputElement>) => {
        props.toggleTask(props.id, e.currentTarget.checked)
    }

    const onClickButtonHandler = () => {
        props.deleteTask(props.id)
    }

    return (
        <li className={props.isDone ? "isDone" : ""}>
            <input onClick={onClickInputHandler} type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
            <button onClick={onClickButtonHandler}>X</button>
        </li>
    );
};

export default TaskItem;