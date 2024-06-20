'use client'

import React, { useEffect, useState } from 'react'

function Post() {
    const [resData,setResData] = useState([])
    useEffect(()  => {
        const Fetch = async () => {
          const res =  await fetch('/api/post')
          const data = await res.json()
          setResData(data)
        }
        Fetch()

    },[])
    console.log(resData);
    
  return (
    <div>
        postData
        {resData.map((post:any) => (
            <div key={post.id}>
            <h4>{post.title}</h4>
            </div>
        ))}
    </div>
  )
}

export default Post