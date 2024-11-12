import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Useeffect2() {
    const [post,setPost]=useState([])
useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>console.log(res))
})
  return (
    <div>Data Fetching!!!</div>
  )
}

export default Useeffect2