import React, { Component } from 'react'
 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comment:'',
         select:''
      }
    }
    //userName Handeller
    userHander=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    //comment handler
    userComment=(event)=>{
        this.setState({
            comment:event.target.value 
        })
    }
    //select handler
    selectHandeler=(event)=>{
        this.setState({
            select:event.target.value
        })
    }
    //submit handler
    submithandler=(event)=>{
        alert(`${this.state.userName}${this.state.comment}${this.state.select}`)
    }
  render() {
    return (
      
        <form onSubmit={this.submithandler}>
            <div>
            <label>
                UserName:
            </label>
            <input type='text' value={this.state.userName} onChange={this.userHander} />
            </div>
            
       <div>
       <label>
            Comment:
        </label>
        <textarea type='text' value={this.state.comment} onChange={this.userComment}/>
       </div>
       <div>
        <label>SelectCourse:</label>
        <select value={this.state.select} onChange={this.selectHandeler}>
            <option value='Javascript'>Javascript</option>
            <option value='React'>React</option>
            <option value='Java'>Java</option>
            <option value='C++'>C++</option>
        </select>
       </div>
        <button type='submit'>Submit</button>
        </form>
     
    )
  }
}

export default Form;