import React, { ChangeEvent, FormEvent, useState } from 'react'
import { TodoFormProps } from '../../interfaces/iTodo'

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  // Utilizando useState para setar o estado do Input
  const [newTodo, setNewTodo] = useState<string>('')

  // Função que faz o botão funcionar
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Utilizando hooks para setar o novo valor
    setNewTodo(e.target.value)
  }

  // Adicionando função para enviar
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    // Evitando padrões (boa prática para criação de botões)
    e.preventDefault()

    // Adicionando a lista
    addTodo(newTodo)

    // Limpando a área de input
    setNewTodo('')
  }

  return (
    <form className="todo-form">
      <input
        type="text"
        data-testid="input-test"
        value={newTodo}
        className="todo-input"
        placeholder="Adicione uma Tarefa"
        onChange={handleChange}
      ></input>

      <button
        data-testid="button-submit"
        type="submit"
        className="todo-button"
        onClick={handleSubmit}
      >
        Adicionar
      </button>
    </form>
  )
}
