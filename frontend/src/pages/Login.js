import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import API from '../api';

export default function LoginPage() {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // ✅ Redirect to dashboard if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/login', { username, password });
      const token = res.data.token;
      localStorage.setItem('token', token);
      login();
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setError('Invalid username or password.');
    }
  };

  return (
    <div style={pageStyle}>
      <form onSubmit={handleLogin} style={formStyle}>
        <h2 style={titleStyle}>Welcome!</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        {error && <p style={errorStyle}>{error}</p>}

        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
}

// --- Same Modern Beautiful Styles ---
const pageStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
  animation: 'fadeIn 1s ease',
};

const formStyle = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '15px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  flexDirection: 'column',
  width: '350px',
  animation: 'slideIn 1s ease',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '25px',
  color: '#333',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const inputStyle = {
  marginBottom: '15px',
  padding: '12px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  outline: 'none',
  transition: 'border-color 0.3s',
};

const buttonStyle = {
  padding: '12px',
  backgroundColor: '#4facfe',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const errorStyle = {
  color: 'red',
  marginBottom: '10px',
  fontSize: '14px',
  textAlign: 'center',
};
