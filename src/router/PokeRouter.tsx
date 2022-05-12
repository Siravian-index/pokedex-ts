import * as React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Pokedex from '../components/Pokedex'
import Pokemon from '../components/Pokemon'
import PokeTeam from '../components/PokeTeam'

interface IPokeRouterProps {}

const PokeRouter: React.FunctionComponent<IPokeRouterProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path='/pokemon/:id' element={<Pokemon />} />
        <Route path='/team' element={<PokeTeam />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PokeRouter
