// Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const history = useNavigate();

    return (
        <nav>
            <div className="logo" onClick={() => history('/')}></div>
            <ul id="navbar">
                
            
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/signin">Iniciar sesion</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
