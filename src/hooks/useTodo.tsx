import { useCallback, useState } from 'react'
import { TodoServices } from '../services/TodoServices'
import { ITodo } from '../interfaces/iTodo'

export const useTasks = () => {
  const [tasks, setTasks] = useState<ITodo[]>([])

  const getAll = useCallback(async () => {
    const { status, data } = await TodoServices.getAll()

    if (status !== 200) throw new Error('Error')

    const orderData = data.reverse()
    setTasks(orderData)
      
  }, [])

    
  return {
    tasks,
    getAll
  }

}
