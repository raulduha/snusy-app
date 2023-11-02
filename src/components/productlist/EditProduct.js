// components/products/EditProduct.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../authprovider/AuthProvider';  // Importa useAuth

function EditProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { user } = useAuth();  // Obtén el objeto user de useAuth
  
  useEffect(() => {
    // Si user no está definido o su rol no es 'admin', redirige a /login
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);


  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${productId}/`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        // Handle error
      });
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('stock', product.stock);
    if (product.image) formData.append('image', product.image, product.image.name);

    axios.put(`http://localhost:8000/api/products/${productId}/`, formData)
      .then(response => {
        // Handle success
      })
      .catch(error => {
        // Handle error
      });
  };

  return (
    product ? (
      <form onSubmit={handleSubmit}>
        {/* ... same input fields as CreateProduct, but with product values ... */}
        <button type="submit">Actualizar Producto</button>
      </form>
    ) : (
      <div>Loading...</div>
    )
  );
}

export default EditProduct;
