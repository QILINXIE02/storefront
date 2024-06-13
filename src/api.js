const apiUrl = process.env.REACT_APP_API_URL;

export const fetchCategories = async () => {
  try {
    // Replace with actual API call to fetch categories
    const response = await fetch(`${apiUrl}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data.categories; // Adjust according to your API response structure
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchProducts = async (category) => {
  try {
    // Replace with actual API call to fetch products for a category
    const response = await fetch(`${apiUrl}/products?category=${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products; // Adjust according to your API response structure
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};