function TodoShow({ todo, onDelete }) {
  const handleClick = () => {
    onDelete(todo.id);
  };

  return (
    <div className="todo-show">
      {todo.description}
      <div className="actions">
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoShow;
