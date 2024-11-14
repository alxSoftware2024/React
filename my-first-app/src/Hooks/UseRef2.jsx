import React, { useEffect } from 'react'
import { useRef } from 'react'

function UseRef2() {
    const useReff=useRef()
    useEffect(()=>{
        useReff.current.focus();

    })
    const hello= () => {
      console.log(useReff.current)
      useReff.current.style.width='200px';
      useReff.current.style.height='50px';
            }
  return ( 
    <>
    <input type='text' ref={useReff}/>
    <button onClick={hello}>Click Me</button>
    </>
  )
}

export default UseRef2