import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  return (
    <nav style={{ padding: 8 }}>
      <span style={{ marginRight: 12 }}>Welcome, {user?.name || 'Guest'}</span>
      <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/orders">View Orders</Link> | <Link to="/cart">Cart ({totalItems})</Link>
      <button style={{ marginLeft: 12 }} onClick={logout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
