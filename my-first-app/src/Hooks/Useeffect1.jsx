import React, { useEffect, useState } from 'react'

function Useeffect1() {
    const [count,counterUpdater]=useState(0);
    useEffect(()=>
    {
        console.log(count);
        //Runs only on the first render
    },[])
  return (
    <div>
Your Clicked {count} times
<button onClick={()=>counterUpdater(count+1)}>Clicked</button>
    </div>
  )
}

export default Useeffect1