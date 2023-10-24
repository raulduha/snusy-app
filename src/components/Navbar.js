import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo"></div>
            <ul id="navbar">
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
