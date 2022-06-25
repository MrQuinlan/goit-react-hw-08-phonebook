import { configureStore } from '@reduxjs/toolkit';

import { filter } from './Filter/Filter-reducer';

import { contactsApi } from '../services/contacts-api';

const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter,

        devTools: process.env.NODE_ENV === 'development',
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(contactsApi.middleware),
});

export { store };
