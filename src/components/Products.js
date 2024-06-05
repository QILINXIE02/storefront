import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const products = useSelector(state => state.products.filtered);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
