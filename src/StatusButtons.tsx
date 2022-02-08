import React from 'react';
import {isDoneType} from "./App";

type statusButtonType={
    setTasksFilter:(isDone:isDoneType)=>void
}

const StatusButtons = (props:statusButtonType) => {
    return (
        <div>
            <button onClick={()=>}{props.setTasksFilter("All")}>All</button>
            <button onClick={()=>}{props.setTasksFilter("Complited")}>Active</button>
            <button onClick={()=>}{props.setTasksFilter("All")}>Completed</button>
        </div>
    );
};

export default StatusButtons;