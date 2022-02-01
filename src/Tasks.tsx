import React from 'react';
import TaskItem from "./TaskItem.";
import {TasksType} from "./TodoList";

type TasksPropsType = {
    tasks: Array<TasksType>
}

const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <ul>
                <TaskItem {...props.tasks[0]}/>
                <TaskItem {...props.tasks[1]}/>
                <TaskItem {...props.tasks[2]}/>
            </ul>
        </div>

    );
};

export default Tasks;