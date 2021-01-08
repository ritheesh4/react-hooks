import React, { useState, useEffect } from 'react';

function ClickEffects() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Updating document')
        document.title = `You clicked ${count} times`;
    },[count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    );
}

export default ClickEffects