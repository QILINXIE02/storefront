import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Products from './Components/Products';
import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Categories />
    <Products />
    <Footer />
  </div>
);

export default App;
