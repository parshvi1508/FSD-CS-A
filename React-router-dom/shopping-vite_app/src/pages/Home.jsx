import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();
  return (
    <div style={{ padding: 16 }}>
      <h1>Shopping App</h1>
      <p>Welcome {user?.name || 'Guest'} — a small demo shopping app.</p>
      <Link to="/products">View Products</Link>
    </div>
  );
};

export default Home;
