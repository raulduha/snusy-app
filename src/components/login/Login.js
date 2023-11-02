import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../authprovider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, logout } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          login(data.user_details, data.token);  // Assume backend returns user object along with token
          toast.success('Inicio de sesión exitoso');
          navigate('/');
        } else {
          setError("Respuesta de inicio de sesión incompleta");
          setIsModalOpen(true);
        }
      } else {
        const errorData = await response.json();
        console.error("Error en el inicio de sesión:", errorData);
        setError(errorData.detail);
        setIsModalOpen(true);
      }

    } catch (error) {
      console.error("Error en el inicio de sesión:", error.message);
      setError("Error en el inicio de sesión");
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
        <p>{error}</p>
      </Modal>
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
            {isLoading && <div className="loading">Cargando...</div>}
            <button type="submit">Iniciar Sesión</button>
          </form>
          <p>
            ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
