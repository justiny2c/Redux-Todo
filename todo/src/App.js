import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { todosReducer } from './reducers';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
