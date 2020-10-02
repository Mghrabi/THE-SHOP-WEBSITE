import {SHOP_TYPES} from './shop-types';
import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsToObj } from '../../firebase';
import {addingDataAsync, checkFetched, checkFetchedError} from './shop-actions';

///NOTE FOR THE ENTIRE APP: divide your code into
//-onstart ==> just trigger the saga chain 
//-onsuccess ==> having a paylaod
//-onFailure ==> having an error payload

/*note here if the action that triggers the the following
generator has any payloads, then you can pass them to the callback function saga 
through the parentheses by distructuring

note that we are using promises only so saga can yield them


-something else: when we want to switch all signins to be done using sagas
then the only thing conceptional defference here is (the backslashed steps) to assign 
/////////const { user } = yield auth.googdsfsd(provider); (which is defferent than 
the method we used to in app.js)
then get your snapshot as usual 
then use the right action to pass the data..
/////////persistance of our userAuth can be done by exploiting the 
feature of onAuthSta..
and import this follow function to the saga file 
so we can get the state of the userAuth if he exist or not 
if(!Authuser) return;
other...

const getCurrentUser = () => new Promise((resolve, reject) => {
   const unSubscribe = auth.onAuthStateChanged( userAuth => {
       unsubscribe();
       resolve(userAuth);
   }, reject)
})

*/
export function* addingDataAsyncProcess() {
    try{
        console.log('hla')
        const collectionsRef =  firestore.collection('collections');
        const collectionSnapshot = yield collectionsRef.get();
        const data = yield call(convertCollectionsToObj, collectionSnapshot);
        yield put(addingDataAsync(data))
        console.log('iam fired');
        if(data.hats){
              yield put(checkFetched(true));
        }
    }catch(error){
        console.log(error.message);
        yield put(checkFetchedError(error.message));
    }
 }


 export function* startFetching () {
    yield takeLatest(SHOP_TYPES.START_FETCHING, addingDataAsyncProcess);
}