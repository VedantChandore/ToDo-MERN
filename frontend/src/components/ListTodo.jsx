import React from 'react';

function ListTodo({ todos, fetchTodos }) {
  async function markAsCompleted(id) {
    await fetch(`http://localhost:2000/completed/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: true }),
    });
    alert("Todo Completed")
    fetchTodos();
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button className="complete-button"  onClick={() => markAsCompleted(todo._id)}>
              Mark as Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;
