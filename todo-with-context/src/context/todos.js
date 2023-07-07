import { createContext, useState } from 'react';

const TodosContext = createContext();

function Provider({ children }) {
  return (
    <TodosContext.Provider value={{}}>
      {children}
    </TodosContext.Provider>
  );
}

export { Provider };
export default TodosContext;
