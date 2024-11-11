import React, { useState } from 'react'

function Usestates() {
const[count,setCounter]=useState(0);
  return (
    <div>
<p>Your current count is{count}</p>
<button onClick={()=>setCounter(count+1)}>ADD</button>
<button onClick={()=>setCounter(count-1)}>SUB</button>
<button onClick={()=>setCounter(0)}>Reset</button>
    </div>
  )
}

export default Usestates;