import CART_TYPES from './cart-types';

export const toggleCartWindow = () => ({
    type: CART_TYPES.TOGGLE_CART_WINDOW
})

export const addItemToCart = (item) => ({
   type:CART_TYPES.ADDING_ITEM_TO_CART,
   payload:item  
})

export const removeItem = (item) => ({
    type: CART_TYPES.REMOVE_ITEM,
    payload: item
})

export const reduceOrRemoveItem = item => ({
    type: CART_TYPES.REDUCE_OR_REMOVE_ITEM,
    payload: item
})

export const cleanCartItems = () => ({
    type: CART_TYPES.CLEAN_CART_ITEMS
})