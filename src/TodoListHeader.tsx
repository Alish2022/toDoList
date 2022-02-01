import React from 'react';

type todoListHeaderPropsType={
    headerTitle:string
}

const TodoListHeader = (props:todoListHeaderPropsType) => {
    return <h3>{props.headerTitle}</h3>
};

export default TodoListHeader;