import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Auth } from '../pages/Auth'
import { NotFound } from '../pages/NotFound'
import { PrivateRoute } from './PrivateRoutes'
import { Register } from '../pages/Register'
import Todo from '../pages/Todo'
import { Logout } from '../pages/Logout'

export function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={<Navigate to="/not-found" replace={true} />}
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route
            path="/not-authorized"
            element={<Auth alert="Usuário não autorizado!" />}
          />
          <Route path="/todo" element={<PrivateRoute />}>
            <Route path="/todo" element={<Todo />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
