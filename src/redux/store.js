import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice"
import filtersReducer from "./filters/slice"
import authReducer from "./auth/slice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistToken = {
    key: 'userToken',
    storage,
    whitelist: ['token']
}

const persistedReducerToken = persistReducer(persistToken, authReducer)

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        contacts: contactsReducer,
        auth: persistedReducerToken,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

});

export const persistor = persistStore(store)

