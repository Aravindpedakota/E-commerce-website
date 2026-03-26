
import {Routes,Route} from 'react-router-dom'
import './App.css';

import Home  from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails'
import Header from './components/Header';
import Cart from './components/Cart';
import LoginForm from './components/LoginForm';
import ProtectedRoutes from './components/ProtectedRoutes';
import NotFound from './components/NotFound';

const App =() => (
  <>
  <Header />
  <div className="page-content">
    <Routes>
      <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
      <Route path="/products" element={<ProtectedRoutes><Products /></ProtectedRoutes>} />
      <Route path="/cart" element={<ProtectedRoutes><Cart /></ProtectedRoutes>} />
      <Route path="/products/:id" element={<ProtectedRoutes><ProductDetails /></ProtectedRoutes>} />
      <Route path='/login' element={<LoginForm/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
</>

)

export default App;
