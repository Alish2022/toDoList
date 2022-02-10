import React from 'react';
import {isDoneType} from "./App";

type statusButtonType={
    setTasksFilter:(isDone:isDoneType)=>void
}

const StatusButtons = (props:statusButtonType) => {
    return (
        <div>
            <button onClick={()=>{props.setTasksFilter("All")}}>All</button>
            <button onClick={()=>{props.setTasksFilter("Active")}}>Active</button>
            <button onClick={()=>{props.setTasksFilter("Completed")}}>Completed</button>
        </div>
    );
};

export default StatusButtons;