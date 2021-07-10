import { useState, createContext } from "react";


export const CounterContext = createContext();


function CounterContextProvider(props){
 
    const[count, setCount] = useState(0);

    function increasecount(){
        setCount(count+1)
    }

    function decreasecount(){
        setCount(count-1)
    }

    const value = {count, increasecount,  decreasecount}

    return(
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;

