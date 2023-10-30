import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './Sidebar.css';
import { useAuth } from './AuthProvider'; // Asegúrate de tener la ruta correcta aquí

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const { user } = useAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Aquí, necesitas redirigir al usuario después de cerrar sesión, puedes usar navigate o otro enfoque que tengas en mente.
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
