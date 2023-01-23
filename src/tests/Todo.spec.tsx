import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Todo from '../pages/Todo'

describe('App Component', () => {
  test('Verifica se o input possui o valor digitado', () => {
    render(<Todo />)
    const inputValue = 'Desafio Front-End Impulsionar 2022'
    const input = screen.getByRole('textbox')
    userEvent.type(input, inputValue)
    expect(input).toHaveValue(inputValue)
  })
})
