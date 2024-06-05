import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const filteredProducts = useSelector(state => state.products.filteredProducts);

  // Check if filteredProducts is undefined before mapping
  if (!filteredProducts) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
