import React from 'react';
import AddItem from "./AddItem";

type addTaskType = {
    addTask: (newTask: string) => void
}

const AddTask: React.FC<addTaskType> = (props) => {
    return (
        <div>
            <AddItem addItem={props.addTask}/>
        </div>
    );
};

export default AddTask;
