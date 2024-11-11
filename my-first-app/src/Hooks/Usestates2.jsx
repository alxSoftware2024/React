import React, { useState } from 'react'

function Usestates2() {
    const[name,setName]=useState({Fname:'',Lname:''})
  return (
    <form>
    <input type="text" value={name.Fname} onChange={e=>setName({...name,Fname:e.target.value})}/>
    <input type="text" value={name.Lname} onChange={e=>setName({...name,Lname:e.target.value})}/>
<h1>Your First Name:{name.Fname}</h1>
<h1>Your Last Name:{name.Lname}</h1>
    </form>
  )
}

export default Usestates2;