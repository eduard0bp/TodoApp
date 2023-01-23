import { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthGoogleContext } from '../providers/authGoogle'
import { auth } from '../services/firebaseConfig'
import { GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { toast, Toaster } from 'react-hot-toast'
import '../styles/Auth.css'

interface AuthProps {
  alert?: string
}

export const Auth = ({ alert }: AuthProps) => {
  const { signInGoogle, signed, setUser } = useContext(AuthGoogleContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    if(alert) {
      toast.error(alert)
    }
  }, [])

  const handleSignIn = (e: any) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((result: any) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token: any = credential?.accessToken
        const user = result.user
        setUser(user)
        sessionStorage.setItem('@AuthFirebase:token', token)
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        toast.error('E-mail ou senha inválidos!')
      })
  }
  
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
              <h1>Seja bem-vindo!</h1>
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
                <button
                  className="login-email"
                  type="submit"
                  onClick={handleSignIn}
                >
                  LOGIN
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
                    <span>Faça login com o Google</span>
                  </span>
                </button>
              </div>
              <Link to="/register" className="register">
                Crie sua conta
              </Link>
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
