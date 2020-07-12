import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './container/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
