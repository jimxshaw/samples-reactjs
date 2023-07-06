import { useState } from 'react';
import TodoEdit from './TodoEdit';

function TodoShow({ todo, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{todo.description}</h3>;
  if (showEdit) {
    content = <TodoEdit todo={todo} onEdit={onEdit} />
  }

  return (
    <div className="todo-show">
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
