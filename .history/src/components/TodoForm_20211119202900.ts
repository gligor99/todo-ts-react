import React, { useState } from "react";

interface addTodo {}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');
  return <div></div>;
};

export default TodoForm;
