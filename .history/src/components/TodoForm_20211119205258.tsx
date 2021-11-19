import React, { ChangeEvent, useState } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setNewTodo(e.target.value)
  }

  return (
    <form className="todo-form">
      <input
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="Add a todo"
        onChange={handleChange}
      />
      <button type="submit" className="todo-button">
        Add a todo
      </button>
    </form>
  );
};

export default TodoForm;
