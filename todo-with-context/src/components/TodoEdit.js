import { useState, useContext } from 'react';
import TodosContext from '../context/todos';

function TodoEdit({ todo, onSubmit }) {
  const { editTodoById } = useContext(TodosContext);
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodoById(todo.id, description);
    onSubmit();
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <form className="todo-edit" onSubmit={handleSubmit}>
      <label>Description</label>
      <input className="input" value={description} onChange={handleChange} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default TodoEdit;
