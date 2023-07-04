import TodoCreate from './components/TodoCreate';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    console.log(todo);
    setTodos(todo);
  };

  return (
    <div>
      <TodoCreate onSubmit={createTodo} />
      <div>
        {todos}
      </div>
    </div>
  );
}

export default App;
