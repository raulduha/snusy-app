import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    phone: '',
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

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await updateProfile(userCredential.user, {
        displayName: `${formData.name} ${formData.surname}`,
      });

      // Guarda la información del usuario en Firestore
      const usersCollection = collection(db, 'users');
      await setDoc(doc(usersCollection, userCredential.user.uid), {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        birthDate: formData.birthDate,
        phone: formData.phone,
        role: formData.role,
      });

      console.log('Registro exitoso');
      navigate('/'); // Redirige al inicio de sesión después del registro exitoso
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
            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input type="text" value={formData.surname} onChange={(e) => setFormData({ ...formData, surname: e.target.value })} />
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
