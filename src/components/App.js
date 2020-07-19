import React from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Routes from '../Router';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 18px;
  }
  :root {
    --dark-grey: #212121;
    --grey: #424242;
    --grey-light: #e0e0e0;
    --dark-blue: #01579b;
    --blue: #0288d1; 
  }
  body {
    font-family: 'Catamaran', sans-serif;
    background: #FFFFFF;
  }
  .selectedLink {
    color: var(--blue) !important;
    font-weight: 700 !important;
  }
`;

function App() {
  return (
    <>
      <Normalize/>
      <GlobalStyle/>
      <Header/>
      <Routes/>
      <Footer/>
    </>
  );
}

export default App;
