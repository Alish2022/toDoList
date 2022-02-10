import React from 'react';

type addTaskType= {
    addTask: (newTask: string) => void
}


const AddTask = (props:addTaskType) => {
    return (
        <div>
            <input type={"text"}/>
            <button onClick={()=>{props.addTask("new")}}>+</button>
        </div>
    );
};

export default AddTask;