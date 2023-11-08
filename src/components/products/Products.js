import React from 'react';
import './Products.css';

// Importa las imágenes directamente desde la carpeta "assets"
import productImage1 from '../../assets/snp1.jpg';
import productImage2 from '../../assets/snp2.jpg';
import productImage3 from '../../assets/snp3.jpg';

const products = [
    {
        image: productImage1,
        title: 'Siberia -80 White Dry    ',
        description: 'White dry portion with taste of spearmint',
        price: '7.990 CLP',
    },
    {
        image: productImage2,
        title: 'VELO Ice cool mint strong slim all white',
        description: 'Slim all white portion with taste of mint and peppermint',
        price: '8.590 CLP',
    },
    {
        image: productImage3,
        title: 'General White Mint Portion',
        description: 'White portion with a cooling taste of mint',
        price: '7.490 CLP',
    },
];

const Products = () => {
    return (
        <div className="products-container">
            {products.map((product, index) => (
                <div className="product-card" key={index}>
                    <img src={product.image} alt={product.title} loading="lazy" />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;
