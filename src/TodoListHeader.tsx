import React from 'react';
import EditableSpan from "./EditableSpan";

type todoListHeaderPropsType = {
    headerTitle: string
    editTitle: (newTitle: string) => void
    deleteToDoList:()=>void
}

const TodoListHeader = (props: todoListHeaderPropsType) => {

    const onClickButtonHandler=()=>{
        props.deleteToDoList()
    }

    return (
        <h3>
            <EditableSpan title={props.headerTitle} edit={props.editTitle}/>
            <button onClick={onClickButtonHandler}>x</button>
        </h3>
        )
};

export default TodoListHeader;