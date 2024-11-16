import React from 'react'
import {useStore} from './zustand'
function Bears() {
    // const bears=useStore(state=>state.bears)
    // const increasePopulation=useStore(state=>state.increasePopulation)
    // const dicreasePopulation=useStore(state=>state.dicreasePopulation)
    // const removeAllBears=useStore(state=>state.removeAllBears)
const {bears,increasePopulation,dicreasePopulation,removeAllBears}=useStore();
    
  return (
    <div>
        <h1>Bears List</h1>
        <p>{bears}</p>
        <button onClick={increasePopulation}>+</button>
        <button onClick={dicreasePopulation}>-</button>
        <button onClick={removeAllBears}>Reset</button>

    </div>
  )
}

export default Bears