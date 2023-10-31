import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';
function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${productId}/`)
        .then(response => setProduct(response.data))
        .catch(error => console.error("Error fetching product details:", error));
    }, [productId]);

    if (!product) return <p>Cargando...</p>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            {/* Aquí podrías agregar un botón para añadir el producto al carrito */}
        </div>
    );
}

export default ProductDetail;
