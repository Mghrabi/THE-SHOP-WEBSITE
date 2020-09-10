import React from 'react';
import CustomButton from '../customButton/customButton.js';
import './cartDropDown.scss';
import { toggleCartWindow } from '../../redux/cart/cart-action.js';

const CartDropDown = () => {
    return (
        <div className='cart-drop-down'>
            <div className='cartItems-on-window'>
                
            </div>
            <CustomButton type='button'>GO TO THE CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropDown;