import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from './Components/Home';
import Products from './Components/Products';
import {Routes, Route} from "react-router-dom";
import Product from './Components/Product';
import Cart from './Components/Cart';
import './Styles/aemGrid/aem-grid.css';
import './Styles/common/main.css';

import store from '../src/redux/store'

function App() {

  console.log('store------',store.getState())

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
