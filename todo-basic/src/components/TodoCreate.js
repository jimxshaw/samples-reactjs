import { useState } from 'react';

function TodoCreate({ onSubmit }) {
  const [todo, setTodo] = useState('');

  const handleCreateSubmit = (event) => {
    event.preventDefault();

    onSubmit(todo);
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleCreateSubmit}>
        <label>Add Todo</label>
        <input value={todo} onChange={handleChange} />
      </form>
    </div>
  );
}

export default TodoCreate;
