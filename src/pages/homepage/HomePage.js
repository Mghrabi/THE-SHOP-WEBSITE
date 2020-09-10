import React from 'react';
import './HomePage.scss';
import Directory from '../../components/directory/directory.js';

const HomePage = () => {
    return (
        <div className='homepage'>
          <h1>WELCOME TO THE SHOP</h1>
          <Directory/>
        </div> 
    )
}

export default HomePage;