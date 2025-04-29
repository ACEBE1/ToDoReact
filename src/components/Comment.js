import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Comment() {
    const {id}= useParams()

    const[comment,setComment]=useState([])


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res=> res.json())
        .then(data => setComment(data) )

    },[])
  return (
    <div>
      <h1>Comment {id}</h1>

        <h3>{comment.name}</h3>

      <p>{comment.body}</p>
    </div>
  )
}
