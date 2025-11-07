import React from 'react';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: 16 }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
