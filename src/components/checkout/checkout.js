import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selector';
import { createStructuredSelector } from 'reselect';
import { createStore } from 'redux';
import CheckoutItem from '../checkoutItem/checkoutItem.js';


const Checkout = ({cartItems}) => {
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='column'>Product</div>
                <div className='column'>Discription</div>
                <div className='column'>Quantity</div>
                <div className='column'>Price</div>
                <div className='remove-column'>Remove</div>
            </div>
            <div className='checkout-items'>
                {cartItems.map(cartItem => {
                return <CheckoutItem key={cartItem} cartItem={cartItem} />
                })}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(Checkout);