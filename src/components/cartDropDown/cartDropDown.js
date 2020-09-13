import React from 'react';
import CustomButton from '../customButton/customButton.js';
import './cartDropDown.scss';
import { toggleCartWindow } from '../../redux/cart/cart-action.js';
import WindowItem from '../windowItem/windowItem.js';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart-selector';

const CartDropDown = ({cartItems, history, toggleCartWindow}) => {
    return (
        <div className='cart-drop-down'>
            {cartItems.length?
                <div className='cartitems-on-window'>
              {
                  cartItems.map(item => {
                  return <WindowItem key={item.id} item={item}/>
              })}
            </div>
            :
            <div className='message'>no selected items</div>
            }
            
            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleCartWindow();
                }} type='button'>CHECKOUT</CustomButton>
        </div>
    )
}


const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})



export default withRouter(connect(mapStateToProps, {toggleCartWindow})(CartDropDown));

