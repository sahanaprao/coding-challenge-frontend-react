import React from 'react';

import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';
import ProductList from './components/Products/ProductList';

import classes from './App.module.css';

function App() {
  return (
    <React.Fragment>
        <Header />
        <main className={classes.centered}>
          <SearchBar />
          <ProductList />
        </main>
    </React.Fragment>
  );
}

export default App;
