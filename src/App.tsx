import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type isDoneType="Active"|"All"|"Complited"

function App() {

    const data1={
        headerTitle:"What to learn" ,
        tasks:[
            {id:0, title:"js", isDone:true},
            {id:2,title:"html",isDone:false},
            {id:3,title:"react",isDone:true}
        ]
    }
    const data2={
        headerTitle:"hello" ,
        tasks:[
            {id:0, title:"jsx", isDone:false},
            {id:2,title:"tsx",isDone:false},
            {id:3,title:"web",isDone:true}
        ]
    }

    let [tasks,setTasks]=useState(data1.tasks)
    let [Filter,setFilter]=useState<isDoneType>("All")

    const setTasksFilter=(isDone:c)=>{
        setFilter(isDone)
    }
    if (Filter==="Active"){
        tasks=tasks.filter((t)=>t.isDone===false)
    }
    if (Filter==="Complited"){
        tasks=tasks.filter((t)=>t.isDone===true)
    }

    const deleteTask=(id:number)=>{
        let newData=tasks.filter((t)=>id!==t.id)
        setTasks(newData)
    }

    return (
        <div className="App">
            <TodoList setTasksFilter={setTasksFilter} deleteTask={deleteTask} tasks={tasks} headerTitle={data1.headerTitle} />

        </div>
    );
}

export default App;
