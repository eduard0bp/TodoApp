import { ITodo } from "./interfaces/iTodo"

type AddTodo = (newTodo: string) => void

type HandleDelete = (todo: Todo) => void

type ToggleComplete = (selectedTodo: ITodo) => void

type PrivateRoute = (props: any) => JSX.Element
