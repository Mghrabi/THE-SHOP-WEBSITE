import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
)

export const selectCollection = (collectionUrlParam) => (createSelector(
    [selectShopData],
    shopData => shopData[collectionUrlParam]
))

export const selectShopDataForPreview = createSelector(
    [selectShopData],
    shopData => {
       return Object.keys(shopData).map(key => shopData[key])
    }
)