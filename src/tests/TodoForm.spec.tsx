import { TodoForm } from "../components/TodoForm/TodoForm"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"
import Todo from "../pages/Todo"

const mock = jest.fn()
const renderTodoForm = () => {
  render(<TodoForm addTodo={mock} />)
}

describe("TodoForm Component", () => {
  test("Escreve no campo de texto", () => {
    renderTodoForm()
    const input = screen.getByPlaceholderText("Adicione uma Tarefa") as HTMLInputElement;
    userEvent.type(input, "Desafio 2")
    expect(input.value).toEqual("Desafio 2")    
  })
})
