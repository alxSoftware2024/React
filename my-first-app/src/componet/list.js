import React from 'react'
function List(){
const prog=['c++','java','python','python']
return(
    <div>
        {/* <h1>{prog[0]}</h1>
        <h1>{prog[1]}</h1>
        <h1>{prog[2]}</h1> */
        }
        {
 prog.map((name,index)=><h1 key={index}>{name}</h1>)
        }
       
    </div>
)
}
export default List;