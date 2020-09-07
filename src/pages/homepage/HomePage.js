import React from 'react';
import './HomePage.scss';
import Directory from '../../components/directory/directory.js';

const HomePage = () => {
    return (
        <div className='homepage'>
          <h1>Welcome to my Homepage</h1>
          <Directory/>
        </div> 
    )
}

export default HomePage;