import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
)

export const selectCollection = (collectionUrlParam) => (createSelector(
    [selectShopData],
    shopData => {
        if(shopData)
            return shopData[collectionUrlParam]
        return null
    } 
))

export const selectShopDataForPreview = createSelector(
    [selectShopData],
    shopData => {
        if(shopData)
            return Object.keys(shopData).map(key => shopData[key]);
        return null
    }
)