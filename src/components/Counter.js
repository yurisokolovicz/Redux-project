import styles from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
    const dispatch = useDispatch();
    // When we use useSelector react-redux will automatically subscribe to the Redux store and will re-run the function we pass to useSelector whenever the store state changes. This means that we don't need to manually subscribe to the store and we don't need to manually re-run the function we pass to useSelector whenever the store state changes. This is all handled by react-redux for us.
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment()); // increment is an action creator that returns an action object. This action object is then dispatched to the Redux store.
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10}
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={styles.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={styles.value}>{counter}</div>}
            <div>
                <button onClick={decrementHandler}>Decrement </button>
                <button onClick={increaseHandler}>Increment by 10 </button>
                <button onClick={incrementHandler}>Increment </button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
