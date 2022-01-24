import './App.css';
import { Main } from './components/layout/Main';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
