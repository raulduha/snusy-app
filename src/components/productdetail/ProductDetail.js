import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Aquí iría tu llamada al endpoint para obtener los detalles del producto por su ID
        // Por ejemplo: axios.get(`/api/products/${productId}`).then(response => setProduct(response.data));
    }, [productId]);

    if (!product) return <p>Cargando...</p>;

    return (
        <div className="product-detail">
            <img src={product.imageURL} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            {/* Aquí podrías agregar un botón para añadir el producto al carrito */}
        </div>
    );
}

export default ProductDetail;
