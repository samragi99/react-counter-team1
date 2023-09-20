import "./counter.css";
import React, { useState } from "react";

function Counter() {
 
  const [count, setCount] = useState(0)


  return (
    <div>
<div className='box'>
<button className='btn'> Count {count}</button>
 <br/> <br/>


<button onClick={() => setCount((count) => count + 1)} className='btn1'>Increment</button>
<button onClick={() => setCount((count) => count - 1)} className='btn2'>Decrement</button>
<br/><br/><br/><br/><br/><br/>
<button className='btn3'><marquee >TEAM 1</marquee></button>

</div>


    </div>
  )
}


export default Counter;
