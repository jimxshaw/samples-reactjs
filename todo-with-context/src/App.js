import { useContext, useEffect } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodosContext from './context/todos';


function App() {
  const { getTodos } = useContext(TodosContext);

  // The arrow function will always be called right after the initial render.
  // The 2nd argument triggers whether the arrow function will be called in
  // subsequent re-renders:
  // [], only triggers in initial render.
  // nothing, no 2nd argument means initial render plus every re-render.
  // [counterState], initial render plus re-renders based on the counterState.
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="app">
      <h1>To Do List</h1>
      <TodoList />
      <TodoCreate />
    </div>
  );
}

export default App;
