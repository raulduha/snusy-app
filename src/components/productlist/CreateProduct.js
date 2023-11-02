// components/products/CreateProduct.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../authprovider/AuthProvider';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState(null);
  const { user } = useAuth();
  // Obtén la función navigate de useNavigate
  const navigate = useNavigate();
  useEffect(() => {
    // Si user no está definido o su rol no es 'admin', redirige a /login
    if (!user || user.role !== 'admin') {
      navigate('/');
    }
  }, [user, navigate]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock', stock);
    if (image) formData.append('image', image, image.name);

    axios.post('http://localhost:8000/api/products/', formData)
      .then(response => {
        // Handle success
      })
      .catch(error => {
        // Handle error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio" required />
      <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" required />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default CreateProduct;
