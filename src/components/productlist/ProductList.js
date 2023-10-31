import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Aquí iría tu llamada al endpoint para obtener todos los productos
        // Por ejemplo: axios.get('/api/products/').then(response => setProducts(response.data));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <Link to={`/products/${product.id}`}>
                        <img src={product.imageURL} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
