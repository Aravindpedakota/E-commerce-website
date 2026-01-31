import { Link } from 'react-router-dom'
import './index.css'

const ProductsItem = props => {
  const { eachDetails } = props

  if (!eachDetails) {
    return null
  }

  const { id, title, image, description } = eachDetails

  return (
    <li className="product-card">
      <Link to={`/products/${id}`} className="product-link">
        <img src={image} alt={title} className="product-image" />
        <h1 className="product-title">{title}</h1>
        <p className="product-description">{description}</p>
      </Link>
    </li>
  )
}

export default ProductsItem
