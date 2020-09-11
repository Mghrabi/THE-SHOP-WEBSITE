import CART_TYPES from './cart-types';

export const toggleCartWindow = () => ({
    type: CART_TYPES.TOGGLE_CART_WINDOW
})

export const addItemToCart = (item) => ({
   type:CART_TYPES.ADDING_ITEM_TO_CART,
   payload:item  
})
