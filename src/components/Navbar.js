import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Sidebar from './Sidebar';
import { useAuth } from './AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user } = useAuth();

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
                <div className="sidebar-icon" onClick={toggleSidebar}>&#9776;</div>
                <div className="logo" onClick={() => navigate('/')}></div>
                <ul id="navbar">
                    <li><Link to="/products">Productos</Link></li>
                    {user ? (
                        <li><Link to="#" onClick={handleLogout}>Cerrar sesión</Link></li>
                    ) : (
                        <li><Link to="/login">Iniciar sesión</Link></li>
                    )}
                </ul>
                {user && (
                    <div className="user-area">
                        <FontAwesomeIcon icon={faUser} className="profile-icon" />
                        {user.displayName}
                    </div>
                )}
            </nav>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};

export default Navbar;
