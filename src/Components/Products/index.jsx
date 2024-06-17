import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { fetchProducts } from '../../api';
import { setProducts } from './product';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list); // Correct state access
  const activeCategory = useSelector((state) => state.categories.activeCategory);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(activeCategory);
        dispatch(setProducts(data)); // Dispatching setProducts to update the products list in Redux store
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    if (activeCategory) {
      loadProducts();
    }
  }, [activeCategory, dispatch]);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="h6">${product.price}</Typography>
              <Button variant="contained" color="primary">Add to Cart</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;