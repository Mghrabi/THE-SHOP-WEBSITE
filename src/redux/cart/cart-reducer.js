import CART_TYPES from './cart-types';
import { addItemToCart } from './cart-utiles';

const initialState = {
    hidden:true,
    cartItems:[]
}


const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case CART_TYPES.TOGGLE_CART_WINDOW:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CART_TYPES.ADDING_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;