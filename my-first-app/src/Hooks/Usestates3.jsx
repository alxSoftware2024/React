import React, { useState,useEffect} from 'react'

function Usestates3() {
    const [Fname,setnamef]=useState('')
    const [Lname,setnamel]=useState('')
     const[count,setCount]=useState(0);
     useEffect(()=>{
        document.title=`${count} Times clicked`
     },[count])
  return (
<>
<input type='text' value={Fname} onChange={e=>setnamef(e.target.value)}/>
<input type='text' value={Lname} onChange={e=>setnamel(e.target.value)}/>

<h1>Your first Name:{Fname}</h1>
<h1>Your Last Name:{Lname}</h1>
<h1>Counter::{count}</h1>
<button onClick={IncreaseCounter}>Add</button>
</>
    )
    function IncreaseCounter()
    {
       
     return  setCount(count+1)
       
    }  
}

export default Usestates3