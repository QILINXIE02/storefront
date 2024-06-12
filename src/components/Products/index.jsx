import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

const Products = () => {
  const products = useSelector(state => state.products);

  return (
    <div>
      {products.map(product => (
        <Card key={product.name}>
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>${product.price}</Typography>
            <Typography>In Stock: {product.inventory}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Products;
