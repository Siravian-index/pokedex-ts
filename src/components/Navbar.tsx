import * as React from 'react'

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav>
      <ul>
        <li>Pokedex</li>
        <li>Team</li>
      </ul>
    </nav>
  )
}

export default Navbar
