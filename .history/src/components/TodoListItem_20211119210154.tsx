import React from 'react'

interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todos, toggleComplete}) => {
    return (
        <div>
            
        </div>
    )
}

export default TodoListItem
