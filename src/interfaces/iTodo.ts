import { AddTodo, ToggleComplete } from "../types"

export interface ITodo {
  id?: number
  text?: string
  complete: boolean
}

export interface TodoFormProps {
  addTodo: AddTodo
}

export interface TodoListProps {
  todos: Array<ITodo>
  toggleComplete: ToggleComplete
  handleDelete: (todo: ITodo) => void
}

export interface TodoListItemProps {
  todo: ITodo
  toggleComplete: ToggleComplete
  handleDelete: () => void
}
