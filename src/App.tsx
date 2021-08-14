import React from 'react';

import ProductProvider from './store/ProductProvider';

import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';
import ProductList from './components/Products/ProductList';

import classes from './App.module.css';

function App() {
  return (
    <ProductProvider>
        <Header />
        <main className={classes.centered}>
          <SearchBar />
          <ProductList />
        </main>
    </ProductProvider>
  );
}

export default App;
