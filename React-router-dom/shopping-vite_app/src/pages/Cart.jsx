import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQty, totalPrice, clearCart, placeOrder } = useCart();

  if (!cart.length) return <div style={{ padding: 16 }}>Cart is empty.</div>;

  return (
    <div style={{ padding: 16 }}>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: 8 }}>
            {item.title} - ₹{item.price} x
            <input
              type="number"
              value={item.qty}
              min={1}
              onChange={(e) => updateQty(item.id, Number(e.target.value))}
              style={{ width: 56, marginLeft: 8 }}
            />
            <button style={{ marginLeft: 8 }} onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ₹{totalPrice}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => { placeOrder(); alert('Order placed'); }}>Place Order</button>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
