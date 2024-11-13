import React from 'react'
import { useContext } from 'react'
import {Ownercontext} from '../App'
function Usecontext2() {
    const name=useContext(Ownercontext)
  return (
    <div>
        <h1>Hello my name:{name}</h1>
        <Componet1/>
    </div>
  )
}
function Componet1()
{
    return(
        <>
          <h1>Hello Componet1 </h1>
        <Componet2/>
        </>
      
        
    )
}
function Componet2()
{
    return(
        <>
        <h1>Hello Componet1 </h1>
      <Componet3/>
      </>    )
}
function Componet3()
{
    return(
        <>
        <h1>Hello Componet1 </h1>
      <Componet4/>
      </>    )
}
function Componet4()
{
    return(
<h1>Hello this is the last:{name}</h1>
    )
}


export default Usecontext2