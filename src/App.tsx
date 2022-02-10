import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type isDoneType="Active"|"All"|"Completed"

function App() {

    const data1={
        headerTitle:"What to learn" ,
        tasks:[
            {id:0, title:"js", isDone:true},
            {id:1,title:"html",isDone:false},
            {id:2,title:"react",isDone:true}
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

    let filteredTasks=tasks

    const addTask=(newTask:string)=>{

        console.log(tasks)
        //setTasks(tasks)
    }

    const toggleTask=(taskId:number)=>{
        let newStatus=tasks.map((task)=>{
            if (taskId===task.id){return {...task,isDone:!task.isDone}}
            return task
        })
        console.log(newStatus)
        setTasks(newStatus)
    }

    const setTasksFilter=(isDone:isDoneType)=>{
        setFilter(isDone)
    }
    if (Filter==="Active"){
        filteredTasks=tasks.filter((t)=>t.isDone===false)
    }
    if (Filter==="Completed"){
        filteredTasks=tasks.filter((t)=>t.isDone===true)
    }

    const deleteTask=(id:number)=>{
        let newData=tasks.filter((t)=>id!==t.id)
        setTasks(newData)
    }

    return (
        <div className="App">
            <TodoList toggleTask={toggleTask}
                      addTask={addTask}
                      setTasksFilter={setTasksFilter}
                      deleteTask={deleteTask}
                      tasks={filteredTasks}
                      headerTitle={data1.headerTitle} />
        </div>
    );
}

export default App;
