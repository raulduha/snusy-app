import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../authprovider/AuthProvider';
import Sidebar from '../sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAuthenticated = !!user;
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};
  const handleLogout = async () => {
    try {
      await logout();  // Utiliza la función de cierre de sesión proporcionada por el hook de autenticación
      navigate('/login');
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <>
      <nav>
      <div className="sidebar-icon" onClick={toggleSidebar}>&#9776;</div>
        <div className="logo" onClick={() => navigate('/')}></div>
        <ul id="navbar">
          <li><Link to="/products">Productos</Link></li>
          {isAuthenticated ? (
            <li><Link to="#" onClick={handleLogout}>Cerrar sesión</Link></li>
          ) : (
            <li><Link to="/login">Iniciar sesión</Link></li>
          )}
        </ul>
        {isAuthenticated && (
          <div className="user-area">
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
            {user.first_name}
          </div>
        )}
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
