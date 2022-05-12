import { useEffect } from 'react'
import Navbar from './components/Navbar'
import PokeRouter from './router/PokeRouter'
import { getAllPokemon } from './service/pokeapi'

function App() {
  // query
  useEffect(() => {
    getAllPokemon()
  }, [])
  return (
    <div>
      <Navbar />
      <PokeRouter />
      {/* Footer */}
    </div>
  )
}

export default App
