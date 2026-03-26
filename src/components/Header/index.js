import { Link, useNavigate } from 'react-router-dom'
import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate('/')
  }

  return (
    <nav className="main-container">
      <h1 className="logo-head">AB</h1>

      <ul className="sub-container">
        
          <Link to="/" className="nav-link">
          <li className="trigger-button">Home </li>
          </Link>
       

        <Link to="/products" className="nav-link">
          <li className="trigger-button">Products </li>
          </Link>

         <Link to="/cart" className="nav-link">
          <li className="trigger-button">Cart </li>
          </Link>

           <Link to="/login" className="nav-link">
          <li className="trigger-button">login </li>
          </Link>
      </ul>

      <button
        type="button"
        className="button"
        onClick={onClickLogout}
      >
        Logout
      </button>
    </nav>
  )
}

export default Header
