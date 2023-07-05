import TodoShow from "./TodoShow";

function TodoList({ todos }) {
  const renderedTodos = todos.map((todo) => {
    return <TodoShow key={todo.id} todo={todo} />
  });

  return (
    <div className="todo-list">
      {renderedTodos}
    </div>
  );
}

export default TodoList;
