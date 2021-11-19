import React from 'react'

interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete}) => {
    return (
        <li>
            <label className={todo.complete ? 'todo-row completed' : 'todo-row'} />
            <input type="checkbox" checked={todo.complete} />
        </li>
    )
}

export default TodoListItem
