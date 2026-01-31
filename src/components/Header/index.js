import { Link, useNavigate } from 'react-router-dom'
import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    navigate('/')
  }

  return (
    <nav className="main-container">
      <h1 className="logo-head">AB</h1>

      <ul className="sub-container">
        <li className="trigger-button">
          <Link to="/" className="nav-link">Home</Link>
        </li>

        <li className="trigger-button">
          <Link to="/products" className="nav-link">Products</Link>
        </li>

        <li className="trigger-button">
          <Link to="/cart" className="nav-link">Cart</Link>
        </li>
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
