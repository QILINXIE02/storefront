import React from 'react';
import './App.css';
import Categories from './Components/Categories/index';
import Footer from './Components/Footer/index';
import Header from './Components/Header/index';
import Products from './Components/Products/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
