import { useState } from "react";

const AddTask = ({addTask})=>{
    const[value, updateValue]= useState("");

    const handleSubmit = e=>{
        e.preventDefault();
        if(value !=="")
        addTask(value)
        updateValue("");
    }
    

    return(
        <form  onSubmit={handleSubmit}>
            <input
            type="text"
            value = {value}
            placeholder="Enter the Task"
            onChange={e=>updateValue(e.target.value)}
            />
            <button type="submit"><i class="material-icons">add</i></button>
        </form>
    )
}

  const ReactToDo = ()=>{
    const addTask = text =>updateTask([...Task,{text}]);
    const[Task, updateTask]= useState([
        {
            text:"Wake up",
            isCompleted:false
        },
        {
            text:"Fresh up",
            isCompleted:false
        },
        {
            text:"Boost up",
            isCompleted:false
        }
    ])

    const removeTask = index =>{
        const newTask = [...Task]
        newTask.splice(index, 1)
        updateTask(newTask);
    }
    const toggleTask = index =>{
        const newTask = [...Task]
        if(newTask[index].isCompleted)
        {
            newTask[index].isCompleted= false
        }
        else{
            newTask[index].isCompleted = true
        }
        updateTask(newTask);
    }

    return(
        <div className="React-to-do">
            {Task.map((Task, index)=>(
                <div className="newreact">
                    <span onClick={()=>toggleTask(index)} className={Task.isCompleted? "completed":"incompleted"}>
                    {Task.text}
                    </span>
                    <button onClick={()=> removeTask(index)}><i class="material-icons">delete</i> </button>
                </div>
                 ))}
                 <AddTask addTask={addTask}/>
        </div>
    )
 }


export default ReactToDo
    
