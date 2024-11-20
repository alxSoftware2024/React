import React from 'react'
import {useStore} from './Catstore'
function CatList3() {
   
  const Addsmallcat=useStore((state)=>state.Addsmallcat)
  const Addbigcats=useStore((state)=>state.Addbigcats)
//const {Addsmallcat,Addbigcats}=useStore()
// const Addsmallcat=useStore.use.Addsmallcat()
// const Addbigcats=useStore.use.Addbigcats()
  return (
    <div>
<h1>Cats Conteloer</h1>
<p>{Math.random()}</p>
<button onClick={Addsmallcat}>Add Small Cat</button>
<button onClick={Addbigcats}>Add Big Cats</button>

    </div>
  )
}

export default CatList3