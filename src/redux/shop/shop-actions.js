import { SHOP_TYPES } from './shop-types';
import { firestore, convertCollectionsToObj } from '../../firebase';


export const addingDataAsync = item => ({
    type:SHOP_TYPES.ADDING_SHOP_DATA_ASYNC,
    payload: item
})

export const checkFetched = value => ({
    type:SHOP_TYPES.CHECK_IF_FETCHED,
    payload:value
})

export const checkFetchedError = error => ({
    type:SHOP_TYPES.CHECK_FETCHED_ERROR,
    payload:error
})


export const fetchingDataFromDatabase = () => {
    return (dispatch) => {
        const collectionsRef = firestore.collection('collections');
        collectionsRef.get().then(async snapShot => {
            const data = await convertCollectionsToObj(snapShot);
            console.log(data);
            
            dispatch(addingDataAsync(data));
            if (data.hats){
                dispatch(checkFetched(true));
            }
       })
       .catch(error => {
           dispatch(checkFetchedError(error));
           alert('error accured');
       })
    }
}