import React from 'react';
import Provider from './Provider';
import { Header, Footer } from './component';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';
import './index.css';


function App(props) {
  return (
    <Provider>
      <Header></Header>
      <BrowserRouter>
      <Routes {...props} />
      </BrowserRouter>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
