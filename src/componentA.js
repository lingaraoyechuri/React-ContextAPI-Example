import React, { useContext } from 'react';
import {CounterContext} from './contexts/CounterContext.js';

function ComponentA() {

    const {count, increasecount,  decreasecount} = useContext(CounterContext)

    return (
        <div>
            <p>This is component A {count}</p>
            <button onClick={increasecount}>increase</button>
            <button onClick={decreasecount}>decrease</button>
        </div>
    )
}

export default ComponentA
