import React, { useState } from 'react'

function Usestates3() {
    const [Fname,setnamef]=useState('')
    const [Lname,setnamel]=useState('')

  return (
<>
<input type='text' value={Fname} onChange={e=>setnamef(e.target.value)}/>
<input type='text' value={Lname} onChange={e=>setnamel(e.target.value)}/>

<h1>Your first Name:{Fname}</h1>
<h1>Your Last Name:{Lname}</h1>

</>
    )
}

export default Usestates3