import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../authprovider/AuthProvider';
import Sidebar from '../sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../cart/CartContext';
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { cartState } = useContext(CartContext); 
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
  const cartItemCount = cartState.items.reduce((acc, item) => acc + 1, 0);  // Calcula el número de elementos en el carrito
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
                        {/* Añadir ícono del carrito y cantidad de elementos */}
                        

                    </div>
                )}
                {isAuthenticated && (
                    <div className="user-area">
            <li><Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} /> ({cartItemCount})  {/* Muestra el icono del carrito y el número de elementos */}
          </Link></li></div>
          )}
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
