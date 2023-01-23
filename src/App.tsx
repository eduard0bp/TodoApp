import { AuthGoogleProvider } from './providers/authGoogle'
import { Rotas } from './Routes/Routes'


function App() {
  return (
    <AuthGoogleProvider>
      <Rotas />
    </AuthGoogleProvider>
  )
}

export default App
