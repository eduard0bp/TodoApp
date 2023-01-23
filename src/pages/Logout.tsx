import { useContext, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthGoogleContext } from '../providers/authGoogle'

export const Logout = () => {
  const { logout, signed } = useContext(AuthGoogleContext)
  const navigate = useNavigate()

  useEffect(() => {
    logout()
    toast.success('Usuário deslogado com sucesso!')
  }, [logout])

  useEffect(() => {
    if (!signed) {
      navigate('/')
    }
  }, [navigate, signed])

  return null
}
