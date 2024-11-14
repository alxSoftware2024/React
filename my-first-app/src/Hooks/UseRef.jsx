import { useState,useRef, useEffect} from "react"
import React from 'react'

function UseRef() {
    const [name,setname]=useState('');
    const count=useRef(0);
    // const [count,setCount]=useState(0);
    // useEffect(()=>{
    //     setCount((prev)=>prev+1)
    // })
    // const countN=UseRef(0);
     useEffect(()=>{
        count.current=count.current+1
    })
  return (
<>
<input type="text" value={name} onChange={e=>setname(e.target.value)}/>
<h1>Your name:{name}</h1>
{ <h1>Renders:{count.current}</h1> }
</>
 )
}

export default UseRef