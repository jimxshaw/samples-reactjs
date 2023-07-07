import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodosContext from './context/todos';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <TodosContext.Provider value={5}>
    <App />
  </TodosContext.Provider>
);
