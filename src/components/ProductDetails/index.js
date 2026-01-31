import { Component } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'

class ProductDetails extends Component {
  state = {
    product: null,
    isLoading: true,
  }

  componentDidMount() {
    const { id } = this.props.params
    this.getProduct(id)
  }

  getProduct = async id => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
      category: data.category,
      rating: data.rating,
    }

    this.setState({ product: updatedData, isLoading: false })
  }

  render() {
    const { product, isLoading } = this.state

    if (isLoading) {
      return <p className="loading-text">Loading...</p>
    }

    return (
      <div className="product-details-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-details-image"
        />
        <div className="product-details-info">
          <h1 className="product-details-title">{product.title}</h1>
          <p className="product-details-description">{product.description}</p>
          <p className="product-details-price">Price: ${product.price}</p>
        </div>
      </div>
    )
  }
}

// Helper to use `useParams` in class component
export default props => <ProductDetails {...props} params={useParams()} />
