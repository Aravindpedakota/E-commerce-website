import { useState, useEffect } from 'react'
import './index.css'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(savedCart)
  }, [])

  const removeItem = id => {
    const updatedCart = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  )

  if (cartItems.length === 0) {
    return <h1 className="empty-cart-text">Your Cart is Empty</h1>
  }

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h2 className="cart-item-title">{item.title}</h2>
              <p className="cart-item-price">Price: ${item.price}</p>
              <p className="cart-item-quantity">
                Quantity: {item.quantity || 1}
              </p>
              <button
                className="remove-button"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="cart-total">Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  )
}

export default Cart
