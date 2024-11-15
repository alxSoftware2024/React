import React from 'react'
import { useReducer } from 'react'
const initialstate=0;
const reducer=(state,action)=>
{
    switch(action)
    {
        case 'increment':return state+1
        case 'decrement':return state-1
        case 'reset':return initialstate

    }

}
function UseReducer() {
    const [count,dispatch]=useReducer(reducer,initialstate)

  return (
    <div>
<h1>count:{count}</h1>
<button onClick={()=>dispatch('increment')}>+</button>
<button onClick={()=>dispatch('decrement')}>-</button>
<button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer