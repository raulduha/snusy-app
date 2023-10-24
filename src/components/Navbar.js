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
                
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
