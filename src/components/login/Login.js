// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); 
      console.log("Inicio de sesión exitoso");
      navigate('/');  // Navega a la página principal después del inicio de sesión exitoso
    } catch (error) {
      console.error("Error en el inicio de sesión:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
      <h1>Iniciar Sesión</h1>
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Correo Electrónico:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <span onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Iniciar Sesión</button>
        </form>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
