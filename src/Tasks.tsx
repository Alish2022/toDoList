import React from 'react';
import TaskItem from "./TaskItem.";
import {TasksType} from "./TodoList";

export type TasksPropsType = {
    tasks: Array<TasksType>
    deleteTask: (id: string) => void
    toggleTask: (taskId: string, value: boolean) => void
    editTask: (taskId: string, newTitle: string) => void
}

const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <ul>
                {props.tasks.map((task, index) => {
                    const editTask=(newTitle:string)=>{
                        props.editTask(task.id,newTitle)
                    }
                    return <TaskItem editTask={editTask}
                        toggleTask={props.toggleTask} key={task.id} deleteTask={props.deleteTask} {...task} />
                })}
            </ul>
        </div>
    );
};

export default Tasks;