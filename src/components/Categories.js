import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../redux/actions';

const Categories = () => {
  const categories = useSelector(state => state.categories.list);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(changeCategory(category));
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.name} onClick={() => handleCategoryClick(category)}>
            {category.displayName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
