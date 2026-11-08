

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
    setCount(newCount)
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
        <h1>Counter</h1>
  <h2>Current Count: {count}</h2>
    <div className="buttons">
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
     <button onClick={reset}>Reset</button>
    </div>

    <label>Step Value:
    <input type="number"  value={step} onChange={handleStep}/>
    </label>

    <p>{history.join(", ")}</p>
   
    
  </div>
)
}


