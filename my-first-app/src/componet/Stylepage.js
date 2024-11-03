import React from 'react'
import './Stylepage.css'
 function Stylepage(props) {
    let name=props.heading?'heading':'heading1'
  return (
    <div>
        <h1 className={`${name} lager_font`}>STYLE PAGE IN REACT</h1>
    </div>
  )
}
export default Stylepage;