import { createStore, applyMiddleware,compose  } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;
import thunk from 'redux-thunk';
 
import rootReducer from '../reducers/index';
 
const persistConfig = {
  key: 'tribetronmasterkey',
  storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer,{},composeEnhancers(applyMiddleware(thunk)))
let persistor = persistStore(store)


  export { store, persistor }
