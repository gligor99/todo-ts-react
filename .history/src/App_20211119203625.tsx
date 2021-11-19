import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <h1>TODO React TypeScript</h1>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
