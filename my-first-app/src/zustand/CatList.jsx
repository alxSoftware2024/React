import React from 'react'
import {useStore} from './Catstore'
function CatList() {
    // const bigcats=useStore((state)=>state.bigcats)
    // const smallcats=useStore((state)=>state.smallcats)
    // const Addsmallcat=useStore((state)=>state.Addsmallcat)
    // const Addbigcats=useStore((state)=>state.Addbigcats)
const {smallcats,bigcats,Addsmallcat,Addbigcats,Summary}=useStore()
//console.log(Summary)
  return (
    <div>
<h1>Cats list</h1>
<p>Small Cats:{smallcats}</p>
<p>Big Cats:{bigcats}</p>
<button onClick={Addsmallcat}>Add Small Cat</button>
<button onClick={Addbigcats}>Add Big Cats</button>
    </div>
  )
}

export default CatList