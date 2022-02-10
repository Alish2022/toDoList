import React, {ChangeEvent, useState} from 'react';

type addTaskType= {
    addTask: (newTask: string) => void
}


const AddTask = (props:addTaskType) => {
    const [newTask,setNewTask]=useState<string>('')

    const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setNewTask(event.currentTarget.value)
    }
    const onClickButtonHandler=()=>{
        props.addTask(newTask)
        setNewTask('')
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={newTask}  type={"text"}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

export default AddTask;