import TodoShow from "./TodoShow";

function TodoList({ todos, onDelete }) {
  const renderedTodos = todos.map((todo) => {
    return <TodoShow key={todo.id} todo={todo} onDelete={onDelete} />
  });

  return (
    <div className="todo-list">
      {renderedTodos}
    </div>
  );
}

export default TodoList;
