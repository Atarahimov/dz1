import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {decrementCounter, incrementCounter} from "../redux/action.js";


function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    const handleIncrement = () => {
        dispatch(incrementCounter());
    };

    const handleDecrement = () => {
        dispatch(decrementCounter());
    };

    return (
        <div>
            <p>Счетчик: {counter}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Counter;
