import React from 'react';
// import 'node-sass';
import HomePage from './pages/homepage/HomePage.js';
import {Route, Link} from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage.js';

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
      <Route exact path='/' component={HomePage}/> 
      <Route exact path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
