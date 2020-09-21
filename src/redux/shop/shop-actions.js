import { SHOP_TYPES } from './shop-types';

export const addingDataAsync = item => ({
    type:SHOP_TYPES.ADDING_SHOP_DATA_ASYNC,
    payload: item
})

export const checkFetched = value => ({
    type:SHOP_TYPES.CHECK_IF_FETCHED,
    payload:value
})