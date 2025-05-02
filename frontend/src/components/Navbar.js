// src/components/Navbar.js
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={navStyle}>
      <h3 style={{ margin: 0 }}>F71 App</h3> {/* Replace 'F71' with your app title */}
      {isLoggedIn && (
        <div style={linkContainerStyle}>
          <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
          <Link to="/summary" style={linkStyle}>Summary</Link>
          <Link to="/reports" style={linkStyle}>Reports</Link>
          <button onClick={handleLogout} style={buttonStyle}>Logout</button>
        </div>
      )}
    </nav>
  );
}

// --- Simple inline styles (you can improve later if you want)
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#eee',
};

const linkContainerStyle = {
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
};

const buttonStyle = {
  padding: '5px 10px',
  cursor: 'pointer',
};
