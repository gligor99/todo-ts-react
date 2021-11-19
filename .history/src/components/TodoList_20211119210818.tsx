import React from "react";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return <div></div>;
};

export default TodoList;
