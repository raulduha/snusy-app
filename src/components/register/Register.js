import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username:'',
    first_name: '',  // Cambiado de name a first_name
    last_name: '',   // Cambiado de surname a last_name
    email: '',
    password: '',
    confirmPassword: '',
    birth_date: '',  // Cambiado de birthDate a birth_date
    phone_number: '', // Cambiado de phone a phone_number
    role: 'cliente'
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    
    // Format the date to YYYY-MM-DD
    let formattedBirthDate = '';
    try {
      const birthDateObject = new Date(formData.birthDate);
      if (!isNaN(birthDateObject.getTime())) {
        // Ensure the date is in ISO format (YYYY-MM-DD)
        formattedBirthDate = birthDateObject.toISOString().split('T')[0];
      } else {
        throw new Error('Fecha de nacimiento inválida');
      }
    } catch (error) {
      console.error("Error al formatear la fecha:", error);
      // Handle the error accordingly, maybe set an error state and display a message
      return; // Prevent the form submission if the date is invalid
    }
  
    // Create an object to send only the required data to the backend
    const userData = {
      username: formData.email, 
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      birth_date: formattedBirthDate, // Use the formatted date
      phone_number: formData.phone_number,
      role: formData.role
    };
    
    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log('Registro exitoso');
        navigate('/login');
      } else {
        const errorData = await response.json();
        console.error("Error en el registro:", errorData);
      }
    } catch (error) {
      console.error("Error en el registro:", error.message);
    }
  };
  
  return (
    <div className="register-page">
      <div className="form-container">
      <h1>Regístrate</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input type="text" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
          </div>

          <div className="form-group">
            <label>Correo Electrónico:</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input type={showPassword ? "text" : "password"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <span onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
          </div>
          <div className="form-group">
            <label>Repetir Contraseña:</label>
            <input type={showPassword ? "text" : "password"} value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
            <span onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
          </div>
          <div className="form-group">
            <label>Fecha de Nacimiento:</label>
            <input type="date" value={formData.birthDate} onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })} />
          </div>
          
          <div className="form-group">
              <label>Teléfono:</label>
              <input 
                  type="tel" 
                  value={formData.phone} 
                  placeholder="+56 (9) 1234 1234"
                  
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
          </div>


          <button type="submit">Registrarse</button>
        </form>
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </div>
      </div>
    </div>
  );
}

export default RegisterPage;
