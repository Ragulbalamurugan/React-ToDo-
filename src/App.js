import React, { useState } from 'react'

  const ReactToDO = ()=>{
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

    return(
        <div className='React'>
            {Task.map((Task,index)=>(
                <div className='newreact'>
                    {Task.text}
                </div>
            ))}
        </div>
    )
}
    

export default "ReactToDo";