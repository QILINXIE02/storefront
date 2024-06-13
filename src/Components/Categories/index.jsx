// Categories/index.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Button, Typography } from '@mui/material';
import { fetchCategories } from '../../api';
import { selectCategory } from '../../store/Categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        dispatch(setCategories(data));
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    };

    loadCategories();
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
  };

  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category}>
          <Button onClick={() => handleCategoryClick(category)}>
            <Typography variant="h6">{category}</Typography>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Categories;
