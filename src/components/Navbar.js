import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Sidebar from './Sidebar'; // Importa el componente Sidebar

const Navbar = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav>
                <div className="sidebar-icon" onClick={toggleSidebar}>&#9776;</div>
                <div className="logo" onClick={() => navigate('/')}></div>
                <ul id="navbar">
                    <li><Link to="/products">Productos</Link></li>
                    <li><Link to="/signin">Iniciar sesión</Link></li>
                </ul>
            </nav>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};

export default Navbar;
