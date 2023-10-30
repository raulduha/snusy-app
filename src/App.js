import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs'; // Asegúrate de tener este componente
import Products from './components/Products'; // Asegúrate de tener este componente
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import './firebase';
import { AuthProvider } from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
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

