import { createContext, useState } from 'react';

const TodosContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(5);

  const valueToShare = {
    count: count,
    incrementCount: () => {
      setCount(count + 1);
    }
  };

  return (
    <TodosContext.Provider value={valueToShare}>
      {children}
    </TodosContext.Provider>
  );
}

export { Provider };
export default TodosContext;
