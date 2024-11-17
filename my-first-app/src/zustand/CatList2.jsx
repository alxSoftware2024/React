import React from 'react'
import {useStore} from './Catstore'
function CatList2() {
   
const {bigcats}=useStore()
  return (
    <div>
<h1>Cats list</h1>
<p>Big Cats:{bigcats}</p>
<p>{Math.random()}</p>
    </div>
  )
}

export default CatList2