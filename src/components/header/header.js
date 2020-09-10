import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { ReactComponent as Bag} from '../../assets/shop-bag.svg';
import { auth } from '../../firebase.js';
import { connect } from 'react-redux';
import CartDropDown from '../cartDropDown/cartDropDown.js';

import { toggleCartWindow } from '../../redux/cart/cart-action';



const Header = ({ currentUser, hidden, toggleCartWindow }) => {
      console.log(hidden);
      console.log(currentUser);
      return (
      <div className='header'>
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
          { currentUser?
            <div className='option' to='/signin'>
              <a onClick={()=> auth.signOut()}>SIGN OUT</a> 
            </div>
            :
            <Link className='option' to='/signin'>
              <div onClick={()=> auth.signOut()}>SIGN IN</div>
            </Link>
          }
          <div >
            <Bag onClick={toggleCartWindow} className='option'/>
          </div>
        </div>
        {hidden?
        null
        :
        <CartDropDown />
        }
        
      </div>)
}
  

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
  currentUser: currentUser,
  hidden:hidden
})

const mapDispatchToProps = dispatch => ({
  toggleCartWindow:() =>  dispatch(toggleCartWindow())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);