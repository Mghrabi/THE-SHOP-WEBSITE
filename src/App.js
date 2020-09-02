import React from 'react';
// import 'node-sass';
import HomePage from './pages/homepage/HomePage.js';
import {Route, Link} from 'react-router-dom';

const HatPage = () => {
  return (
    <div>
      <h1>here is a hat page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;
