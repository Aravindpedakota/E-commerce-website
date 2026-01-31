import { Component } from 'react'
import ProductsItem from '../ProductsItem'
import './index.css'

class Products extends Component {
  state = {
    newList: [],
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data);
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      description: eachItem.description,
      image: eachItem.image,
      category: eachItem.category,
      price: eachItem.price,
      rating: eachItem.rating,
    }))

    this.setState({ newList: updatedData })
  }

  render() {
    const { newList } = this.state

    return (
      <div className="main-container">
        <ul className="unorder-list">
          {newList.map(eachDetails => (
            <ProductsItem
              key={eachDetails.id}
              eachDetails={eachDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Products
