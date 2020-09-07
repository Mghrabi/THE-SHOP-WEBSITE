import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from './logo.svg';
import { auth } from '../../firebase.js';


const Header = ({ currentUser}) => {
      return (<div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          <Link className='option' to='/shop'>
            CONTACT
          </Link>
          {
            currentUser?
            <div className='option' to='/signin'>
              <a onClick={()=> auth.signOut()}>SIGN OUT</a> 
            </div>
            :
            <Link className='option' to='/signin'>
              <div onClick={()=> auth.signOut()}>SIGN IN</div> 
            </Link>
          }
        
        </div>
      </div>)
}
  


export default Header;