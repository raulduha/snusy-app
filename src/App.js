import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs'; 
import Products from './components/Products'; 
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import './firebase';
import { AuthProvider } from './components/AuthProvider';
import AgeVerificationModal from './components/AgeVerificationModal';

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


