import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type addTaskType = {
    addTask: (newTask: string) => void
}

const AddTask: React.FC<addTaskType> = (props) => {

    const [newTask, setNewTask] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        if (newTask.trim() !== '') {
            props.addTask(newTask.trim())
            setNewTask('')
            setError(null)
        } else {
            setError("Field is required")
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode===13){
            onClickButtonHandler()
        }
    }

    return (
        <div>
            <input className={error?"errorInput":''} onKeyPress={onKeyPressHandler} onChange={onChangeInputHandler} value={newTask} type={"text"}/>
            <button onClick={onClickButtonHandler}>+</button>
            {error && <div className={"errorMessage"}>{error}</div>}
        </div>
    );
};

export default AddTask;