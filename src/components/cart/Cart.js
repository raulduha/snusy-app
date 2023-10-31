import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';
function Cart() {
    const [cartItems, setCartItems] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:8000/api/cart/')
        .then(response => setCartItems(response.data))
        .catch(error => console.error("Error fetching cart items:", error));
    }, []);


    // Función para manejar la eliminación de un producto del carrito
    const handleRemoveFromCart = (productId) => {
        // Aquí iría tu llamada al endpoint para eliminar el producto del carrito
        // Actualizar luego el estado local con setCartItems
    };

    return (
        <div className="cart">
            {cartItems.map(item => (
                <div key={item.product.id} className="cart-item">
                    <img src={item.product.imageURL} alt={item.product.name} />
                    <h3>{item.product.name}</h3>
                    <p>{item.product.price}</p>
                    <button onClick={() => handleRemoveFromCart(item.product.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
