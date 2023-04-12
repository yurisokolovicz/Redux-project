import { createSlice, configureStore } from '@reduxjs/toolkit';
// configureStore is a function from Redux Toolkit that combines the createStore function from Redux with the applyMiddleware function from Redux.

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++; // Here we can mutate the state directly because we are using the createSlice function from Redux Toolkit. This is not possible with the createStore function from Redux.
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

const store = configureStore({
    reducer: counterSlice.reducer
});
// CounterActions is an object that contains all the action creators for the counter slice. It includes the increment, decrement, increase, and toggleCounter action creators.
export const counterActions = counterSlice.actions;

export default store;
