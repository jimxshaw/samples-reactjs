import { useState } from 'react';

function TodoCreate({ onCreate }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(todo);
    setTodo('');
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Todo</label>
        <input value={todo} onChange={handleChange} />
        <button>Create!</button>
      </form>
    </div>
  );
}

export default TodoCreate;
