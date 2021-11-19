import React, { useState } from "react";

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  return (
    <form className="todo-form">
      <input
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="Add a todo"
      />
    </form>
  );
};

export default TodoForm;
