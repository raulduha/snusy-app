import React from 'react';
import './Products.css';

// Importa las imágenes directamente desde la carpeta "assets"
import productImage1 from '../assets/sn.png';
import productImage2 from '../assets/sn2.png';
import productImage3 from '../assets/sn3.png';

const Products = () => {
    return (
        <div className="products-container">
            <div className="product-card">
                <img src={productImage1} alt="Product 1" loading="lazy"/>
                <h2>Product 1</h2>
                <p>Description of Product 1.</p>
            </div>
            <div className="product-card">
                <img src={productImage2} alt="Product 2" loading="lazy"/>
                <h2>Product 2</h2>
                <p>Description of Product 2.</p>
            </div>
            <div className="product-card">
                <img src={productImage3} alt="Product 3" loading="lazy"/>
                <h2>Product 3</h2>
                <p>Description of Product 3.</p>
            </div>
            <div className="product-card">
                <img src={productImage1} alt="Product 4" loading="lazy"/>
                <h2>Product 4</h2>
                <p>Description of Product 4.</p>
            </div>
            <div className="product-card">
                <img src={productImage2} alt="Product 5" loading="lazy"/>
                <h2>Product 5</h2>
                <p>Description of Product 5.</p>
            </div>
            <div className="product-card">
                <img src={productImage3} alt="Product 6" loading="lazy"/>
                <h2>Product 6</h2>
                <p>Description of Product 6.</p>
            </div>
            {/* Agrega más tarjetas de productos según sea necesario */}
        </div>
    );
};

export default Products;
