import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: 8, borderRadius: 6, width: 220 }}>
      <h4>{product.title}</h4>
      <p style={{ margin: '4px 0' }}>{product.description}</p>
      <p style={{ fontWeight: 'bold' }}>₹{product.price}</p>
      <div>
        <Link to={`/products/${product.id}`}>View</Link>
        <button style={{ marginLeft: 8 }} onClick={() => onAdd(product)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
