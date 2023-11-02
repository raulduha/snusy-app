import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Sidebar.css';
import { useAuth } from '../authprovider/AuthProvider';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const { user, logout } = useAuth(); // Obtiene logout de useAuth
    const navigate = useNavigate(); // Define navigate

    const handleLogout = async () => {
        try {
            await logout();
            toggleSidebar();
            navigate('/login');
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        }
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>✖</button>
            <div className="sidebar-content">
                <h1>Menu</h1>
                <ul>
                    <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to="/products" onClick={toggleSidebar}>Productos</Link></li>
                    {user ? (
                        <li><Link to="#" onClick={() => { toggleSidebar(); handleLogout(); }}>Cerrar sesión</Link></li>
                    ) : (
                        <li><Link to="/login" onClick={toggleSidebar}>Iniciar sesión</Link></li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
