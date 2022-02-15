import React from 'react';
import {isDoneType} from "./App";
import './App.css'

type statusButtonType={
    setTasksFilter:(isDone:isDoneType)=>void
    filter:isDoneType
}

const StatusButtons = (props:statusButtonType) => {

    const onClickAllButtonHandler=()=>{
        props.setTasksFilter("All")
    }

    const onClickActiveButtonHandler=()=>{
        props.setTasksFilter("Active")
    }

    const onClickCompletedButtonHandler=()=>{
        props.setTasksFilter("Completed")
    }

    return (
        <div>
            <button className={props.filter==="All"?"active":""} onClick={onClickAllButtonHandler}>All</button>
            <button className={props.filter==="Active"?"active":""} onClick={onClickActiveButtonHandler}>Active</button>
            <button className={props.filter==="Completed"?"active":""} onClick={onClickCompletedButtonHandler}>Completed</button>
        </div>
    );
};

export default StatusButtons;