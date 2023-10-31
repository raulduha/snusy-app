import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import AboutUs from './components/aboutus/AboutUs';
import Products from './components/products/Products'; 
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import './firebase';
import { AuthProvider } from './components/authprovider/AuthProvider';
import AgeVerificationModal from './components/ageverificationmodal/AgeVerificationModal';

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
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;


