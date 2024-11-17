import React from 'react'
import {useStore} from './Catstore'
function CatList() {
    // const bigcats=useStore((state)=>state.bigcats)
    // const smallcats=useStore((state)=>state.smallcats)
    // const Addsmallcat=useStore((state)=>state.Addsmallcat)
    // const Addbigcats=useStore((state)=>state.Addbigcats)
const {smallcats,bigcats,Addsmallcat,Addbigcats,Summary,total}=useStore()
//console.log(Summary())
  return (
    <div>
<h1>Cats list</h1>
<p>Small Cats:{smallcats}</p>
<p>Big Cats:{bigcats}</p>
<h3>Total No.of Cats:{total}</h3>
<button onClick={Addsmallcat}>Add Small Cat</button>
<button onClick={Addbigcats}>Add Big Cats</button>
<button onClick={Summary}>Show Total</button>
    </div>
  )
}

export default CatList