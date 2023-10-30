import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Sidebar from './Sidebar';
import { useAuth } from './AuthProvider'; // Asegúrate de tener la ruta correcta aquí
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user } = useAuth(); // Extrae el usuario del contexto de autenticación

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        }
    };

    return (
        <>
            <nav>
                {/* ... Otros elementos ... */}
                <ul id="navbar">
                    <li><Link to="/products">Productos</Link></li>
                    {user ? (
                        <>
                            <li className="user-area" onClick={handleLogout}>
                                <div className="profile-icon"></div>
                                {user.displayName}
                            </li>
                            <li><Link to="#" onClick={handleLogout}>Cerrar sesión</Link></li>
                        </>
                    ) : (
                        <li><Link to="/login">Iniciar sesión</Link></li>
                    )}
                </ul>
            </nav>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};

export default Navbar;
