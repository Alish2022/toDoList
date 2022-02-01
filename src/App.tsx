import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {

    const data={
        headerTitle:"What to learn" ,
        tasks:[
            {id:0, title:"js", isDone:true},
            {id:2,title:"html",isDone:false},
            {id:3,title:"react",isDone:true}
        ]
    }
    const data1={
        headerTitle:"hello" ,
        tasks:[
            {id:0, title:"jsx", isDone:false},
            {id:2,title:"tsx",isDone:false},
            {id:3,title:"web",isDone:true}
        ]
    }
    return (
        <>
            <TodoList {...data}/>
            <TodoList {...data1}/>
        </>
    );
}

export default App;
