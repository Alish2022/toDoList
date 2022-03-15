import React, {MouseEvent} from 'react';
import {TasksType} from "./TodoList";
import EditableSpan from "./EditableSpan";

type taskItemType = TasksType & {
    deleteTask: (id: string) => void
    toggleTask: (taskId: string, value: boolean) => void
    editTask:(newTitle:string)=>void
}

const TaskItem:React.FC<taskItemType> = (props) => {

    const onClickInputHandler = (e: MouseEvent<HTMLInputElement>) => {
        props.toggleTask(props.id, e.currentTarget.checked)
    }

    const onClickButtonHandler = () => {
        props.deleteTask(props.id)
    }

    return (
        <li className={props.isDone ? "isDone" : ""}>
            <input onClick={onClickInputHandler} type="checkbox" checked={props.isDone}/>
            {/*<span>{props.title}</span>*/}
            <EditableSpan edit={props.editTask} title={props.title}/>
            <button onClick={onClickButtonHandler}>X</button>
        </li>
    );
};

export default TaskItem;