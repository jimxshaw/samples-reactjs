import { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    // Array and object state updates must be done in
    // a particular way or will cause trouble later on.
    // https://state-updates.vercel.app/
    const updatedTodos = [...todos, {
      id: Math.round(Math.random() * 9999),
      description: todo
    }];

    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <TodoList todos={todos} />
      <TodoCreate onCreate={createTodo} />
    </div>
  );
}

export default App;
