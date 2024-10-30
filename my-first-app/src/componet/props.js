// import React from 'react'
// function Fullname(props){
//     return(
//         <div>
// <h1>{props.name}TESFAYE</h1>
//     {props.children}
//         </div>
//     );
// }
// export default Fullname;
//Props in Class componet
import React, { Component } from 'react'
class Fullname extends Component{
    render(){
        return(
            <div>
                 <h1>{this.props.name} KEBEDE</h1>
            {this.props.children}
            </div>
           
        );
    }
}
export default Fullname;