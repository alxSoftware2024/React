import React, { Component } from 'react'
 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comment:''
      }
    }
    //Handeller
    userHander=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    userComment=(event)=>{
        this.setState({
            comment:event.target.value 
        })
    }
    
  render() {
    return (
      <div>
        <form>
            <label>
                UserName:
            </label>
            <input type='text' value={this.state.userName} onChange={this.userHander} />
        <label>
            Comment:
        </label>
        <textarea type='text' value={this.state.comment} onChange={this.userComment}/>
        </form>
      </div>
    )
  }
}

export default Form;