

import { useState } from "react"

export default function Counter(){
const [count, setCount] = useState(0)
const [step, setStep] = useState(1)
 
 function increment () {
    setCount(count+step)
    console.log(count)
 }


 function decrement () {
    setCount(count-step)
    console.log(count)
 }

 function handleStep(e){
    setStep(Number(e.target.value))
 }

return(
    <>
    <p>{count}</p>
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
    
    <input type="number"  value={step} onChange={handleStep}></input>
    </>
)
}


