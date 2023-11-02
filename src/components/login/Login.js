import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../authprovider/AuthProvider';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, logout } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      // En LoginPage
      if (response.ok) {
            const data = await response.json();
            if (data.token) {
              login(data.user_details, data.token);  // Asume que el backend devuelve un objeto de usuario junto con el token
              navigate('/');
            } else {
              setError("Respuesta de inicio de sesión incompleta");
            }
      }else {
        const errorData = await response.json();
        console.error("Error en el inicio de sesión:", errorData);
        setError(errorData.detail);
      }
      
    } catch (error) {
      console.error("Error en el inicio de sesión:", error.message);
      setError("Error en el inicio de sesión");
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
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
