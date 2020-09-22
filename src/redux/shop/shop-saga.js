import {SHOP_TYPES} from './shop-types';
import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsToObj } from '../../firebase';
import {addingDataAsync, checkFetched, checkFetchedError} from './shop-actions';





export function* addingDataAsyncProcess() {
    try{
        console.log('hla')
        const collectionsRef =  firestore.collection('collections');
        const collectionSnapshot = yield collectionsRef.get();
        const data = yield call(convertCollectionsToObj, collectionSnapshot);
        yield put(addingDataAsync(data))
        // if(data.hats){
        yield put(checkFetched(true));
        // }
    }catch(error){
        console.log(error.message);
        yield put(checkFetchedError(error.message));
    }
 }


 export function* startFetching () {
    yield takeLatest(SHOP_TYPES.START_FETCHING, addingDataAsyncProcess)
}