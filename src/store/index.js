import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

createSlice({
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
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        };
    }

    return state;
};

const store = createStore(counterReducer);

export default store;
