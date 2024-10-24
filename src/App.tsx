import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import Footer from './components/Footer';
import About from './pages/AboutPage';
import Purchase from './pages/Purchase'

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Purchase/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </CartProvider>
  );
};

export default App;
