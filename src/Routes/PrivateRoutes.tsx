import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthGoogleContext } from '../providers/authGoogle'

export function PrivateRoute() {
  const { signed } = React.useContext(AuthGoogleContext)

  return signed ? <Outlet /> : <Navigate to="/not-authorized" />
}
