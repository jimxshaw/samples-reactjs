import { useContext } from 'react';
import TodosContext from '../context/todos';
import TodoShow from './TodoShow';

function TodoList() {
  const { todos } = useContext(TodosContext);

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
