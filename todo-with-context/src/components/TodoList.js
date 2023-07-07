import { useContext } from 'react';
import TodosContext from '../context/todos';
import TodoShow from './TodoShow';

function TodoList({ todos, onDelete, onEdit }) {
  const renderedTodos = todos.map((todo) => {
    return <TodoShow key={todo.id}
      todo={todo}
      onDelete={onDelete}
      onEdit={onEdit} />
  });

  return (
    <div className="todo-list">
      {renderedTodos}
    </div>
  );
}

export default TodoList;
