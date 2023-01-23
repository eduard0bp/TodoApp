import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCfB7GkiZLpax7NJGFKmC-frJwCwexrqxI',
  authDomain: 'desafio-frontend-modulo3.firebaseapp.com',
  projectId: 'desafio-frontend-modulo3',
  storageBucket: 'desafio-frontend-modulo3.appspot.com',
  messagingSenderId: '715727612497',
  appId: '1:715727612497:web:0dace60ea0febe24fc2670',
  measurementId: 'G-3TCET46NPE'
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
