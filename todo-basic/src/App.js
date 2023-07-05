import TodoCreate from './components/TodoCreate';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    // Array and object state updates must be done in
    // a particular way or will cause trouble later on.
    // https://state-updates.vercel.app/
    const updatedTodos = [...todos, { id: 123, description: todo }];

    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.length}
      <TodoCreate onCreate={createTodo} />
    </div>
  );
}

export default App;
