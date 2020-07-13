import React from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Hero from './Hero';
import Results from './Results';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 18px;
  }
  :root {
    --dark-grey: #212121;
    --grey: #424242;
    --grey-light: #e0e0e0;
  }
  body {
    font-family: 'Catamaran', sans-serif;
    background: #FFFFFF;
  }
`;

function App() {
  return (
    <>
      <Normalize/>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <Results/>
      <Footer/>
    </>
  );
}

export default App;
