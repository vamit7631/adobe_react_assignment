import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import HandleCart from './HandleCart';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducers = combineReducers({HandleCart})

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default persistedReducer