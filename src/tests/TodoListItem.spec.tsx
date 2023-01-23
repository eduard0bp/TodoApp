import { TodoListItem } from '../components/TodoListItem/TodoListItem'
import { render, screen, waitFor } from '@testing-library/react'
import Todo from '../pages/Todo'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('TodoListItem Component', () => {
  test('Verifica se o botão de remover da lista está visível', () => {
    const mock = jest.fn()
    render(
      <TodoListItem
        todo={{ complete: false, text: 'Tarefa' }}
        toggleComplete={mock}
        handleDelete={mock}
      />
    )
    const removeButton = screen.getByTestId('button-delete')
    expect(removeButton).toBeVisible()
  })

  test('Verifica se o item fica rasurado', async () => {
    const mock = jest.fn()
    render(
      <TodoListItem
        todo={{ complete: true, text: 'Tarefa' }}
        toggleComplete={mock}
        handleDelete={mock}
      />
    )
    const listItem = screen.getByTestId('list-item')
    expect(listItem).toHaveClass('todo-row completed')
  })

  test('deve chamar a função toggleComplete', () => {
    const handleDelete = jest.fn
    const toggleComplete = jest.fn()

    render(
      <TodoListItem
        todo={{ complete: false, text: 'Tarefa' }}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
      />
    )
    screen.getByTestId('button-complete').click()
    expect(toggleComplete).toBeCalled()
  })

  test('deve chamar a função handleDelete corretamente', () => {
    const handleDelete = jest.fn()
    const toggleComplete = jest.fn()
    render(
      <TodoListItem
        todo={{ complete: false, text: 'Tarefa' }}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
      />
    )
    screen.getByTestId('button-delete').click()
    expect(handleDelete).toBeCalled()
  })
})
