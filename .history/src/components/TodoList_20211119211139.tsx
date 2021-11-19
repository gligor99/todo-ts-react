import React from "react";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <ul>
      // eslint-disable-next-line array-callback-return
      {todos.map((todo) => {
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />;
      })}
    </ul>
  );
};

export default TodoList;
