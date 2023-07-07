import { useState } from 'react';
import useTodosContext from '../hooks/use-todos-context';

function TodoCreate() {
  const { createTodo } = useTodosContext();
  const [todo, setTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(todo);
    setTodo('');
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div className="todo-create">
      <h3>Add a Todo</h3>
      <form onSubmit={handleSubmit}>
        <label>Description</label>
        <input className="input" value={todo} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default TodoCreate;
