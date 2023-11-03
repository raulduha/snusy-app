import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';
import { CartContext } from '../cart/CartContext';
function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { cartDispatch } = useContext(CartContext)
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${productId}/`)
        .then(response => setProduct(response.data))
        .catch(error => console.error("Error fetching product details:", error));
    }, [productId]);

    const handleAddToCart = () => {
        cartDispatch({
            type: 'ADD_ITEM',
            payload: { product, quantity: 1 }
        });
    };

    if (!product) return <p>Cargando...</p>;


    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>Cantidad disponible: {product.stock}</p>
            <button onClick={handleAddToCart}>Añadir al carrito</button>
            {/* Aquí podrías agregar un botón para añadir el producto al carrito */}
        </div>
    );
}

export default ProductDetail;
