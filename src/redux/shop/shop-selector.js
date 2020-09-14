import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
)

export const selectCollection = (collectionUrlParam) => (createSelector(
    [selectShopData],
    shopData => {
        console.log(shopData);
        return  shopData[collectionUrlParam]
    }
))