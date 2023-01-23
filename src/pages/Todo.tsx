import { useEffect, useState } from 'react'
import { TodoForm } from '../components/TodoForm/TodoForm'
import { TodoList } from '../components/TodoList/TodoList'
import { useTasks } from '../hooks/useTodo'
import { ITodo } from '../interfaces/iTodo'
import { TodoServices } from '../services/TodoServices'
import { AddTodo, HandleDelete, ToggleComplete } from '../types'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import '../styles/Todo.css'

function Todo() {
  // Criando os estados
  const [todos, setTodos] = useState<Array<ITodo>>([])

  // Marcando tarefa completa
  const toggleComplete: ToggleComplete = async selectedTodo => {
    // Atualizando o status da tarefa
    const payload = {
      id: selectedTodo.id,
      complete: !selectedTodo.complete
    }
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: payload.complete }
      }
      return todo
    })
    setTodos(updatedTodos)
    await TodoServices.updateItems(payload)
  }

  // Adicionando tarefas
  const addTodo: AddTodo = async newTodo => {
    // Realizando verificação simples
    if (newTodo !== '') {
      // Invertendo a ordem da lista para melhor experiência do usuário
      const payload = {
        text: newTodo,
        complete: false
      }
      const response = await TodoServices.postItems(payload)
      const invertTodo = [...todos]
      invertTodo.unshift(response.data)
      setTodos(invertTodo)
      toast.success('Tarefa adicionada com sucesso!')
    } else {
      toast.error('Digite algo no campo de texto!')
    }
  }

  // Função de deletar tarefas
  const handleDelete: HandleDelete = todo => {
    const newTodoList = todos.filter(t => t.id !== todo.id)
    TodoServices.deleteTasks(todo.id)
    setTodos(newTodoList)
    toast.success('Tarefa removida com sucesso!')
  }

  const { getAll, tasks }: any = useTasks()

  const navigate = useNavigate()

  useEffect(() => {
    setTodos(tasks)
  }, [tasks])

  useEffect(() => {
    getAll()
  }, [])

  return (
    <div className="todo-app">
      <Toaster position="top-left" reverseOrder={false} />
      <div className="header">
        <button
          type="button"
          className="logout-button"
          onClick={() => {
            navigate('/logout')
          }}
        >
          LOGOUT
        </button>
      </div>
      <h1 className="title">LISTA DE TAREFAS</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
      />
      <p className="footer">
        Desenvolvido por Eduardo Batista Pereira no Programa Impulsionar 2022 -
        © South System
      </p>
    </div>
  )
}

export default Todo
