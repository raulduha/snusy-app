// Cart.js
import React, { useContext } from 'react';

import './Cart.css';
import { CartContext } from './CartContext';

function Cart() {
    const { cartState, cartDispatch } = useContext(CartContext);

    const handleRemoveFromCart = (productId) => {
        cartDispatch({
            type: 'REMOVE_ITEM',
            payload: { id: productId }
        });
    };

    return (
        <div className="cart">
            {cartState.items.map(item => (
                <div key={item.product.id} className="cart-item">
                    <img src={item.product.image} alt={item.product.name} />
                    <h3>{item.product.name}</h3>
                    <p>{item.product.price}</p>
                    <button onClick={() => handleRemoveFromCart(item.product.id)}>Eliminar</button>
                </div>
            ))
            
            }
        </div>
    );
}

export default Cart;
