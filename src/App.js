import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  const addItem = (todos) => {
    // assuming no duplicates for demo purposes
    setTodos([...todos, todos]);
  };

  const removeItem = (itemToBeDeleted) => {
    setTodos(todos.filter((todos) => itemToBeDeleted !== todos));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;