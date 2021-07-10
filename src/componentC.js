import React, { useContext } from 'react';
import {CounterContext} from './contexts/CounterContext.js';


function ComponentC() {
    const {increasecount} = useContext(CounterContext)
    return (
        <div>
            <button onClick={increasecount}>increase</button>
        </div>
    )
}

export default ComponentC
