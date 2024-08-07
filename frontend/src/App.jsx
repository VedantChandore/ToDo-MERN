import React, { useState, useEffect } from 'react';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';
import './App.css';
//mport { set } from 'mongoose';

function App() {
  const [todos,setTodos]=useState([])
  
  async function fetchTodos(){
    const response=await fetch("http://localhost:2000/get-todos")
    const data=await response.json()
    setTodos(data.todos_list)
  }
  useEffect(()=>{
    fetchTodos()
  },[])
  
  return (
    <div>
        <h1>Todo App</h1>
        <CreateTodo fetchTodos={fetchTodos}></CreateTodo>
        <ListTodo todos={todos} fetchTodos={fetchTodos}></ListTodo>
    </div>
  );
}

export default App;
