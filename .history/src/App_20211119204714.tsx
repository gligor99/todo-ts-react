import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<Array<Todo>([]);
  return (
    <div className="App">
      <h1>TODO React TypeScript</h1>
      <TodoForm />
    </div>
  );
}

export default App;
