import { useEffect } from 'react'
import Navbar from './components/Navbar'
import PokeRouter from './router/PokeRouter'

function App() {
  useEffect(() => {}, [])
  return (
    <div>
      <Navbar />
      <PokeRouter />
      {/* Footer */}
    </div>
  )
}

export default App
