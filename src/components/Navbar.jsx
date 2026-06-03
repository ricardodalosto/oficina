import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <span>DELSON</span> VEMAG
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              Sobre Nós
            </NavLink>
          </li>
          <li>
            <NavLink to="/vemag" className={({ isActive }) => isActive ? 'active' : ''}>
              O Vemaguet
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar