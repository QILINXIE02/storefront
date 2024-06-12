import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, List, ListItem } from '@mui/material';
import { selectCategory } from '../../store/categories';

const Categories = () => {
  const categories = useSelector(state => state.categories.list);
  const dispatch = useDispatch();

  return (
    <List>
      {categories.map(category => (
        <ListItem key={category.name}>
          <Button onClick={() => dispatch(selectCategory(category.name))}>
            {category.displayName}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Categories;
