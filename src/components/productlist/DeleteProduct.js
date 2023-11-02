// components/products/DeleteProduct.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../authprovider/AuthProvider';  // Importa useAuth

function DeleteProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();  // Obtén el objeto user de useAuth

  useEffect(() => {
    // Si user no está definido o su rol no es 'admin', redirige a /login
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);


  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/products/${productId}/`)
      .then(response => {
        navigate('/products');  // Redirect to product list after successful deletion
      })
      .catch(error => {
        // Handle error
      });
  };

  return (
    <div>
      <button onClick={handleDelete}>Eliminar Producto</button>
    </div>
  );
}

export default DeleteProduct;
