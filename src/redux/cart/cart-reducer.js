import CART_TYPES from './cart-types';

const initialState = {
    hidden:true
}


const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case CART_TYPES.TOGGLE_CART_WINDOW:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;