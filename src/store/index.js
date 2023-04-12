import { createSlice, configureStore } from '@reduxjs/toolkit';
// configureStore is a function from Redux Toolkit that combines the createStore function from Redux with the applyMiddleware function from Redux.

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});
// CounterActions is an object that contains all the action creators for the counter slice. It includes the increment, decrement, increase, and toggleCounter action creators.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
