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
