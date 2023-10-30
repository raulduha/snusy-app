import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>✖</button>
            <div className="sidebar-content">
                <h1>Menu</h1>
                <h2></h2>
                <ul>
                    <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to="/products" onClick={toggleSidebar}>Productos</Link></li>
                    <li><Link to="/login" onClick={toggleSidebar}>Iniciar sesión</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
