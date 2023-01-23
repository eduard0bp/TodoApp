import { AxiosResponse } from 'axios'
import { ITodo } from '../interfaces/iTodo'
import { Api } from '../providers/api'

const getAll = () => Api.get<ITodo[]>('/api/todo/')
const deleteTasks = (id: any) => Api.delete<ITodo[]>(`/api/todo/${id}`)
const updateItems = (todo: ITodo): Promise<AxiosResponse<ITodo>> =>
  Api.put(`/api/todo/${todo.id}`, todo)
const postItems = (newTodo: ITodo): Promise<AxiosResponse<ITodo>> =>
  Api.post('/api/todo/', newTodo)

export const TodoServices = {
  getAll,
  deleteTasks,
  postItems,
  updateItems
}
