import { useState, useContext } from 'react';
import TodosContext from '../context/todos';

function TodoCreate() {
  const { createTodo } = useContext(TodosContext);
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
