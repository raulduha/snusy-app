// ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css'; 
import { useAuth } from '../authprovider/AuthProvider';

function ProductList() {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [priceRange, setPriceRange] = useState([5000, 9000]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handlePriceRangeChange = (e) => {
        const value = e.target.value;
        const [min, max] = value.split('-').map(Number);
        setPriceRange([min, max]);
    };

    const filteredProducts = products.filter(product => {
        const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                              product.description.toLowerCase().includes(search.toLowerCase());
        return inPriceRange && matchesSearch;
    });

    return (
        <div className="container">
            <div className="sidebar">
                {user && user.role === 'admin' && (
                    <div className="add-product-button">
                        <Link to="/products/create" className="btn">Agregar Producto</Link>
                    </div>
                )}
                <div className="filter-section">
                    <input type="text" placeholder="Buscar..." value={search} onChange={handleSearchChange} />
                    <select value={`${priceRange[0]}-${priceRange[1]}`} onChange={handlePriceRangeChange}>
                        <option value="5000-9000">Todos los precios</option>
                        <option value="5000-6000">$5000 - $6000</option>
                        <option value="6000-7000">$6000 - $7000</option>
                        <option value="7000-8000">$7000 - $8000</option>
                        <option value="8000-9000">$8000 - $9000</option>
                    </select>
                </div>
            </div>
            <div className="product-list">
            {filteredProducts.map(product => (
                <div key={product.id} className="product-item">
                    <Link to={`/products/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </Link>
    
                    {/* Muestra los botones de editar y eliminar solo si el usuario es admin */}
                    {user && user.role === 'admin' && (
                        <div className="admin-actions">
                            <Link to={`/products/edit/${product.id}`} className="btn btn-edit">Editar</Link>
                            <Link to={`/products/delete/${product.id}`} className="btn btn-delete">Eliminar</Link>
                        </div>
                    )}
                </div>
            ))}
        </div>
        </div>
    );
}

export default ProductList;
