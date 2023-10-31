import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css'; // Asegúrate de que la ruta sea correcta

function ProductList() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
        .then(response => setProducts(response.data))
        .catch(error => console.error("Error fetching products:", error));
    }, []);


    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <Link to={`/products/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
