import React from 'react'

 function InlineStyle() {
    const heading={
        color:'red',
        backgroundColor:'black',
        fontSize:'80px'
    }
  return (
    <div>
        <h1 style={heading}>Inline styele in React</h1>
    </div>
  )
}
export default InlineStyle;