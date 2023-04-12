import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
    // countReducer is the name of the slice from the counter-slice.js
    // authReducer is the name of the slice from the auth-slice.js
});

export default store;

// In the index.js in the store we want to merge all the slices together.
