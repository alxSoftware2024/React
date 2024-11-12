import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Useeffect2() {
    const [post,setPost]=useState([])
useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{console.log(res)

setPost(res.data)
})
},[])
  return (
    <div>
        <ul>
            {post.map(posts=>(
              <li key={posts.id}>{posts.title}</li>  
            ))}
        </ul>
    </div>
  )
}

export default Useeffect2