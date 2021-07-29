import React from 'react';
import {createStore} from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whilelist: ['usuario']
  //whitelist keep the; reducer that you want;
};



const pReducer = persistReducer( persistConfig, Reducers);

const store = createStore(pReducer);
const persistor = persistStore ( store );

export {store, persistor};
