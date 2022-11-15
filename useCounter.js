import { useState } from "react"

export const useCounter =(inictialValue = 10)=>{
    const[ counter, setCounter ] = useState(inictialValue)

    const increment =(value = 1) => {
        setCounter(counter + value);
    }
    
    const decrement =(value = 1) => {
        // if (counter === 0) return;
        setCounter(counter - value);

    }
    const reset=() => {
        setCounter(inictialValue);

    }
    

    
    
    return{
         counter,
         increment,
         decrement,
         reset,
    }
}