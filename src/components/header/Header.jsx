import { Link, Outlet } from 'react-router-dom'
import './header.scss'
import { FaUser, FaMapMarked, FaParking } from "react-icons/fa";


const Header = () => {
  return (
    <div className='container'>
      <header className="header">

        <Link className='logo' to='/home'>
          <FaParking className='header__icon' />
        </Link>

        <nav className="header-nav">
          <Link className='icon' to='/register'>
            <FaMapMarked />
          </Link>

          <Link className='icon' to='/register'>
            <FaUser />
          </Link>
        </nav>

      </header>
      <Outlet />
    </div>
  )
}

export default Header