import { useState } from 'react';
import TodoEdit from './TodoEdit';
import useTodosContext from '../hooks/use-todos-context';

function TodoShow({ todo }) {
  const { deleteTodoById } = useTodosContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteTodoById(todo.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{todo.description}</h3>;
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div className="todo-show">
      <img alt="todos" src={`https://picsum.photos/seed/${todo.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoShow;
