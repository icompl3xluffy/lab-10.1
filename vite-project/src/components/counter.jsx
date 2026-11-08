

import { useState } from "react"

export default function Counter(){
const [count, setCount] = useState(0)
const [step, setStep] = useState(1)
const [history ,setHistory]=useState([0])

 function increment () {
     const newCount=count+step
     setCount(newCount)
     setHistory([...history, newCount])
   
 }


 function decrement () {
   const newCount=count-step
    setCount(count-step)
  setHistory([...history, newCount])
    
 }

 function handleStep(e){
    setStep(Number(e.target.value))
 }
 function reset(){
    setCount(0)
    setHistory([0])
 }

return(
     <div className="counter">
    <p>{count}</p>
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
     <button onClick={reset}>Reset</button>
    
    <input type="number"  value={step} onChange={handleStep}></input>
    <p>{history.join(", ")}</p>
   
    
  </div>
)
}


