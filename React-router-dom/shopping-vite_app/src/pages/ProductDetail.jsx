import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) return <div style={{ padding: 16 }}>Product not found.</div>;

  return (
    <div style={{ padding: 16 }}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default ProductDetail;
