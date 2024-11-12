import React from 'react'
import { useContext } from 'react'
import {Ownercontext} from '../App'
function Usecontext() {
const name=useContext(Ownercontext)
  return (
    <div>
        {name}
    </div>
  )
}

export default Usecontext