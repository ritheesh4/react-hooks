import React, { useReducer } from 'react'

const initialState = 0
const reduer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterThree() {
    const [count, dispatch] = useReducer(reduer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reduer, initialState)

    return (
        <div>
            <div>Count -{count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>Count Two -{countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>

    )
}

export default CounterThree