import React from 'react'
import {useStore} from './Catstore'
function CatList2() {
   //All function re-render in {useStore} if we use the below syntax this slow dwon our system
//const {bigcats}=useStore()
//TO solve this problem use the below syntax
const bigcats=useStore((state)=>state.bigcats)
//const bigcats=useStore.use.bigcats()
  return (
    <div>
<h1>Cats list</h1>
<p>Big Cats:{bigcats}</p>
<p>{Math.random()}</p>
    </div>
  )
}

export default CatList2