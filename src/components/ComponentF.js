import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component F 
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        </div>

    )
}
export default ComponentF