import { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../services/firebaseConfig'
import { toast } from 'react-hot-toast'

type AuthGoogleContextValue = {
  signInGoogle: any
  signed: boolean
  setUser: any
  logout: () => void
}

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const AuthGoogleContext = createContext({} as AuthGoogleContextValue)

export const AuthGoogleProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null)

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

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
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
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        toast.error('Erro ao logar com a conta Google!')
      })
  }

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem('@AuthFirebase:token')
    sessionStorage.removeItem('@AuthFirebase:user')
  }

  return (
    <AuthGoogleContext.Provider
      value={{ signInGoogle, signed: !!user, setUser, logout }}
    >
      {children}
    </AuthGoogleContext.Provider>
  )
}
