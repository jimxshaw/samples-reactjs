import { useContext } from 'react';
import TodosContext from '../context/todos';
import TodoShow from './TodoShow';

function TodoList({ todos, onDelete, onEdit }) {
  const value = useContext(TodosContext);

  const renderedTodos = todos.map((todo) => {
    return <TodoShow key={todo.id}
      todo={todo}
      onDelete={onDelete}
      onEdit={onEdit} />
  });

  return (
    <div className="todo-list">
      {value}
      {renderedTodos}
    </div>
  );
}

export default TodoList;
