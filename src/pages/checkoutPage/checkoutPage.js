import React from 'react';
import CheckOut from '../../components/checkout/checkout';
import Checkout from '../../components/checkout/checkout.js';
import CustomButton from '../../components/customButton/customButton.js';
import { selectCartTotal } from '../../redux/cart/cart-selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkoutPage.scss';

import StripeCheckoutButton from '../../components/stripeCheckout/stripeCheckout';



const CheckoutPage = ({total}) => {
    return (
       <div className='checkout-page'>
           <Checkout />
           <h1>TOTAL: {total}$</h1>
           <div className='message-test'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
           </div>
           <div className='stripe-buttonn'>
                <StripeCheckoutButton price={total} />
           </div>
       </div>
    
    )
}

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);