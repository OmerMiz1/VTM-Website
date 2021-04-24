import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyle.style';

import HomePage from './pages/HomePage'

function App() {

  return (
    <Router>
      <GlobalStyle/>
      <HomePage></HomePage>
    </Router>

  );
}

export default App;
