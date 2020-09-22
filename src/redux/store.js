import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';

import { startFetching } from './shop/shop-saga';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

sagaMiddleware.run(startFetching);

export default store;