import React from 'react';
import { useSelector } from 'react-redux';

const SimpleCart = () => {
  const cart = useSelector(state => state.cart.items);

  return (
    <aside>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </aside>
  );
};

export default SimpleCart;
