

import { useState } from "react"

export default function Counter(){
const [count, setCount] = useState(0)
 
 function increment () {
    setCount(count+1)
    console.log(count)
 }


 function decrement () {
    setCount(count-1)
    console.log(count)
 }

return(
    <>
    <p>{count}</p>
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
    </>
)
}


