import React from 'react'
import { TodoListProps } from '../../interfaces/iTodo'
import { TodoListItem } from '../TodoListItem/TodoListItem'

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  handleDelete
}) => {
  
  return (
    // Pegando todas as tarefas passadas e mapeando
    <ul>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          handleDelete={() => handleDelete(todo)}
        />
      ))}
    </ul>
  )
}
