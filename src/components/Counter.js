import styles from './Counter.module.css';
import { useSelector } from 'react-redux';
// useSelector is a hook that allows us to extract data from the Redux store state. This hook is a function that takes a function as an argument. This function will receive the Redux store state as an argument and should return the data we want to extract from the store state. The useSelector hook will then return this extracted data. This hook will automatically re-run whenever the store state changes and will return the latest extracted data.

const Counter = () => {
    // When we use useSelector react-redux will automatically subscribe to the Redux store and will re-run the function we pass to useSelector whenever the store state changes. This means that we don't need to manually subscribe to the store and we don't need to manually re-run the function we pass to useSelector whenever the store state changes. This is all handled by react-redux for us.
    const counter = useSelector(state => state.counter);

    const toggleCounterHandler = () => {};

    return (
        <main className={styles.counter}>
            <h1>Redux Counter</h1>
            <div className={styles.value}>{counter}</div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
