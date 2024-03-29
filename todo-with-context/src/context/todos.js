import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const TodosContext = createContext();

function Provider({ children }) {
  const [todos, setTodos] = useState([]);

  // Wrap useCallback around getTodos in order to keep the initial
  // getTodos memory reference for subsequent re-renders.
  // https://tinyurl.com/5n6kmenz
  const getTodos = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/todos');

    setTodos(response.data)
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

  const editTodoById = async (id, newDescription) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      description: newDescription
    });

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // Take all the response data key-value pairs and add it to the new object.
        return { ...todo, ...response.data };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);

    // Filter does not modify existing array but 
    // creates a new one and copies contents over.
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(updatedTodos);
  }

  const valueToShare = {
    todos,
    getTodos,
    createTodo,
    editTodoById,
    deleteTodoById
  };

  return (
    <TodosContext.Provider value={valueToShare}>
      {children}
    </TodosContext.Provider>
  );
}

export { Provider };
export default TodosContext;
