import React from 'react'
import { TodoListItemProps } from '../../interfaces/iTodo'

// Função que retornará um item da lista
export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  handleDelete
}) => {
  return (
    <li
      data-testid="list-item"
      className={todo.complete ? 'todo-row completed' : 'todo-row'}
    >
      <label>
        <input
          data-testid="button-complete"
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
      <button
        onClick={handleDelete}
        data-testid="button-delete"
        className="remove-button"
      >
        Remover da Lista
      </button>
    </li>
  )
}
