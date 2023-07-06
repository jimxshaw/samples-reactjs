import { useState, useEffect } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import axios from 'axios';


function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos');

    setTodos(response.data)
  }

  useEffect(() => {
    getTodos();
  }, []);

  const createTodo = async (todo) => {
    const response = await axios.post('http://localhost:3001/todos', {
      description: todo
    });

    // Array and object state updates must be done in
    // a particular way or will cause trouble later on.
    // https://state-updates.vercel.app/
    const updatedTodos = [...todos, response.data];

    setTodos(updatedTodos);
  };

  const editTodoById = (id, newDescription) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, description: newDescription };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodoById = (id) => {
    // Filter does not modify existing array but 
    // creates a new one and copies contents over.
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className="app">
      <h1>To Do List</h1>
      <TodoList todos={todos}
        onDelete={deleteTodoById}
        onEdit={editTodoById} />
      <TodoCreate onCreate={createTodo} />
    </div>
  );
}

export default App;
