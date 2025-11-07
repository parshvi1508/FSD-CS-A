import React from 'react';
import { useCart } from '../context/CartContext';

const Orders = () => {
  const { orders } = useCart();

  if (!orders || !orders.length) return <div style={{ padding: 16 }}>No orders yet.</div>;

  return (
    <div style={{ padding: 16 }}>
      <h2>Your Orders</h2>
      <ul>
        {orders.map((o) => (
          <li key={o.id} style={{ marginBottom: 12 }}>
            <div>Order ID: {o.id}</div>
            <div>Placed: {new Date(o.createdAt).toLocaleString()}</div>
            <div>Total: ₹{o.total}</div>
            <div>
              Items:
              <ul>
                {o.items.map((it) => (
                  <li key={it.id}>
                    {it.title} x {it.qty}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
