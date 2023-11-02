import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import AboutUs from './components/aboutus/AboutUs';
import Products from './components/products/Products'; 
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';

import { AuthProvider } from './components/authprovider/AuthProvider';
import AgeVerificationModal from './components/ageverificationmodal/AgeVerificationModal';
import Cart from './components/cart/Cart';
import ProductDetail from './components/productdetail/ProductDetail';
import ProductList from './components/productlist/ProductList';
function App() {
  const [showModal, setShowModal] = useState(true);

  const handleConfirm = () => {
    setShowModal(false);
  };

  const handleDeny = () => {
    alert("Debes ser mayor de 18 años para acceder a este sitio.");
    setShowModal(false);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {showModal && <AgeVerificationModal onConfirm={handleConfirm} onDeny={handleDeny} />}
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;


