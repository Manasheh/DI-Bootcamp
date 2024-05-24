import React, { useState } from 'react';
import List from './List';
import { Todo } from './Types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => addTodo(`Task ${Date.now()}`)}>Add Todo</button>
      <List items={todos} renderItem={(todo) => <div>{todo.text}</div>} />
    </div>
  );
};

export default App;

