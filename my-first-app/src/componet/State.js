import React, { Component } from 'react'

class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"Subscribe"
      }
      this.Message=this.Message.bind(this);
    }
    Message(){
        this.setState({
            msg:"Thank for Subscribe"
        })
        
    }
  render() {
    return (
      <div>
<h1>{this.state.msg}</h1>
{/* <button onClick={this.Message.bind(this)}>click</button> */}
{/* <button onClick={()=>this.Message()}>click</button> */}
 <button onClick={this.Message}>click</button> 

      </div>
    )
  }
}
export default State;
