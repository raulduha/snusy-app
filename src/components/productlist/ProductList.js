import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css'; // Asegúrate de que la ruta sea correcta
import { useAuth } from '../authprovider/AuthProvider';

function ProductList() {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
        .then(response => setProducts(response.data))
        .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="product-list">
            {/* Muestra el botón de agregar producto solo si el usuario es admin */}
            {user && user.role === 'admin' && (
                <div className="add-product-button">
                    <Link to="/products/create" className="btn">Agregar Producto</Link>
                </div>
            )}
    
            {products.map(product => (
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
    );}

export default ProductList;
