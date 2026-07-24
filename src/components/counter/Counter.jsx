import React, { useReducer } from "react";
import { counterReducer, initialState } from "./counterReducer";

const Counter = () => {

    // useReducer - Manages state via a reducer function — better for complex, multi-part state transitions.

    const [state, dispatch] = useReducer(counterReducer, initialState)

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
    )
}

export default Counter;