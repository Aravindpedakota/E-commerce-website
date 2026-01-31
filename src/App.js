
import {Routes,Route} from 'react-router-dom'
import './App.css';

import Home  from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails'
import Header from './components/Header';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

const App =() => (
  <>
  <Header />
  <div className="page-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
</>

)

export default App;
