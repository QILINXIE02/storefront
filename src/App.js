import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import SimpleCart from './components/SimpleCart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
      <SimpleCart />
      <Footer />
    </div>
  );
}

export default App;
