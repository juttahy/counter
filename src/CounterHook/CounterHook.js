import React, { useState } from "react";
import "./CounterHook.css";

const CounterHook = () => {
    // useState has to be te first thing!!
    // declare a new state variable, which we'll call "count"
    // count = original state (the first value between []. these can be any text, this is just an example variable name)
    // setCount = Changed state (the second value between [] )
    // useState(0) = first value is 0
    const [counter, setCounter] = useState(0);
    
    const addHandler = () => {
        setCounter(counter + 1);
    }

    const removeHandler = () => {
        counter <= 0 ? setCounter(0) : setCounter(counter - 1);
    }

    const resetHandler = () => {
        setCounter(0);
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={addHandler}>Add one</button>
            <button onClick={removeHandler}>Remove one</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    );
}

export default CounterHook;