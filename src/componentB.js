import React, { useContext } from 'react';
import {CounterContext} from './contexts/CounterContext.js';
import ComponentC from './componentC.js';

function ComponentB() {
    const {count} = useContext(CounterContext)
    return (
        <div>
           <p>This is component B {count}</p>
           <ComponentC/> 
        </div>
    )
}

export default ComponentB
