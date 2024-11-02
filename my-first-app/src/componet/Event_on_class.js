import React, { Component } from 'react'

 class Event_on_class extends Component {
   Click() {
    console.log("Clicked");
   } 
  render() {
    return (
      <div>
<button onClick={this.Click}>click me</button>
      </div>
    )
  }
}
export default Event_on_class;