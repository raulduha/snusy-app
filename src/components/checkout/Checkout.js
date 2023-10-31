import React, { useState } from 'react';

function Checkout() {
    const [orderDetails, setOrderDetails] = useState({
        name: '',
        address: '',
        phone: '',
        email: ''
        // Puedes agregar más detalles según lo que necesites
    });

    const handleInputChange = (e) => {
        setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // Aquí enviarías los detalles del pedido al backend
        // Por ejemplo: axios.post('/api/orders/', orderDetails).then(response => /* manejar respuesta */);
    };

    return (
        <div className="checkout">
            <h2>Finalizar compra</h2>
            <form onSubmit={handleSubmit}>
                {/* Añade campos para cada detalle que necesites */}
                <input name="name" placeholder="Nombre" onChange={handleInputChange} />
                <input name="address" placeholder="Dirección" onChange={handleInputChange} />
                <input name="phone" placeholder="Teléfono" onChange={handleInputChange} />
                <input name="email" placeholder="Correo Electrónico" onChange={handleInputChange} />
                <button type="submit">Confirmar compra</button>
            </form>
        </div>
    );
}

export default Checkout;
