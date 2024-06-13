import React from 'react';
import { useSelector } from 'react-redux';

const SimpleCart = () => {
  const cart = useSelector(state => state.cart);
  console.log('Cart:', cart); // Log the value of cart

  const items = cart?.items || []; // Use optional chaining to avoid errors
  
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleCart;
