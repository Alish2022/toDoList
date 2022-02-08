import React from 'react';
import TaskItem from "./TaskItem.";
import {TasksType} from "./TodoList";

export type TasksPropsType = {
    tasks: Array<TasksType>
    deleteTask: (id: number) => void

}

const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <ul>
                {props.tasks.map(t =>
                    <li>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => {props.deleteTask(t.id)}}>X
                        </button>
                    </li>)}
            </ul>
        </div>

    );
};

export default Tasks;