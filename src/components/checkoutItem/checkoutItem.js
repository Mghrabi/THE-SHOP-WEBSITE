import React from 'react';
import './checkoutItem.scss';
import { connect } from 'react-redux';
import { removeItem, addItemToCart, reduceOrRemoveItem} from '../../redux/cart/cart-action';


const checkoutItem = ({cartItem, removeItem, addItemToCart, reduceOrRemoveItem}) => {
    const { imageUrl, name, price, quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='column'>
                <img src={imageUrl}/>
            </div>
            <div className='column'>
                {name}
            </div>
            <div className='column arrows'>
                <div onClick={() => reduceOrRemoveItem(cartItem)} className='arrow'>&#10096;</div>
                {quantity}
                <div onClick={() => addItemToCart(cartItem)} className='arrow'>&#10097;</div>
            </div>
            <div className='column'>
                {price}
            </div>
            <div onClick={() => removeItem(cartItem)} className='remove-column'>
                &#10005;
            </div>
        </div>
    )
}


const mapDispatchTpProps = dispatch => ({
    removeItem: (item) => dispatch(removeItem(item)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    reduceOrRemoveItem: item => dispatch(reduceOrRemoveItem(item))
})

export default connect(null, mapDispatchTpProps)(checkoutItem);