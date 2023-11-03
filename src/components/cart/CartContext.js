// CartContext.js
import React, { createContext, useReducer } from 'react';

// Define el estado inicial del carrito
const initialState = {
    items: []
};

// Define el reducer para el carrito
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.product.id !== action.payload.id)
            };
        default:
            return state;
    }
};

// Crea el contexto
export const CartContext = createContext();

// Crea el proveedor de contexto
export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    );
};
