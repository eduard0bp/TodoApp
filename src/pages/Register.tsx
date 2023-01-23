import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider
} from 'firebase/auth'
import { useContext, useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthGoogleContext } from '../providers/authGoogle'
import { auth } from '../services/firebaseConfig'
import '../styles/Auth.css'

interface AuthProps {
  alert?: string
}

export const Register = ({ alert }: AuthProps) => {
  const { signInGoogle, signed, setUser } = useContext(AuthGoogleContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function loginGoogle() {
    await signInGoogle()
  }

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem('@AuthFirebase:token')
      const sessionUser = sessionStorage.getItem('@AuthFirebase:user')
      if (sessionToken && sessionUser) {
        setUser(sessionUser)
      }
    }
    loadStoreAuth()
  }, [])

  function handleSignOut(e: any) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((result: any) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token: any = credential?.accessToken
        const user = result.user
        setUser(user)
        sessionStorage.setItem('@AuthFirebase:token', token)
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
        toast.success('Conta criada com sucesso!', {
          duration: 6000
        })
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        setUser(null)
        toast.error('Erro ao criar sua conta!')
      })
  }

  useEffect(() => {
    if (signed) {
      navigate('/todo')
    }
  }, [])

  if (!signed) {
    return (
      <div className="app">
        <div>
          <Toaster />
        </div>
        <div className="parent">
          <div className="div1">
            <img src="images/char.svg" alt="Logo" className="logo" />
          </div>
          <div className="div2">
            <form className="login-form">
              <h1>Cadastre-se!</h1>
              <div className="buttons-container">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="input"
                  placeholder="  Digite seu E-mail"
                  onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="  Digite sua Senha"
                  onChange={e => setPassword(e.target.value)}
                />
                <button className="login-email" onClick={handleSignOut}>
                  CADASTRAR
                </button>
                <button
                  onClick={loginGoogle}
                  data-testid="button-submit"
                  type="button"
                  className="login-button"
                >
                  <span className="login-button-icon">
                    <i className="fa fa-google"></i>
                  </span>
                  <span className="login-button-text">
                    <span>Continue com o Google</span>
                  </span>
                </button>
              </div>
              <span>
                Você já tem uma conta?
                <Link to="/" className="register">
                  Acesse sua conta aqui.
                </Link>
              </span>
            </form>
          </div>
        </div>
        <p className="footer">
          Desenvolvido por Eduardo Batista Pereira no Programa Impulsionar 2022
          - © South System
        </p>
      </div>
    )
  } else {
    return <Navigate to="/todo" />
  }
}
