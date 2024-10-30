import React from 'react'
function Fullname(props){
    return(
        <div>
<h1>{props.name}TESFAYE</h1>
    {props.children}
        </div>
    );
}
export default Fullname;