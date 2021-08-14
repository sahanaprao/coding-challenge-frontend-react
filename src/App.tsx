import React from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

import classes from './App.module.css';

function App() {
  return (
    <React.Fragment>
        <Header />
        <main className={classes.centered}>
          <SearchBar />
        </main>
    </React.Fragment>
  );
}

export default App;
