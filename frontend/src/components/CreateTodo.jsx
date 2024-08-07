import React, { useState } from 'react';

function CreateTodo({ fetchTodos }) {
    //state variables
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')

    async function handleSubmit(e){
        e.preventDefault()
        await fetch("http://localhost:2000/create-todo",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title,description,completed:false})

    })
    setTitle('')
    setDescription('')
    fetchTodos()
    }
    function handleTitle(e){
        setTitle(e.target.value)
    }
    function handleDescription(e){
        setDescription(e.target.value)
    }
  
  

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='title' value={title} onChange={handleTitle}></input>
        <input type="text" placeholder='description' value={description} onChange={handleDescription}></input>
        <button type="submit">Add Todo</button>
    </form>
  );
}

export default CreateTodo;
