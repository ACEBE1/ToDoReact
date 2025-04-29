import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Comments() {
    const[comment,setComment] = useState([])


    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => setComment(data.slice(0,10)))
    })
  return (
    <div>
      <h1>Commentler</h1>
        {
            comment.map(item => 
                <li key={item.id}> <Link to={`/comment/${item.id}`} > CommentNo :{item.id} </Link> </li>
            )
        }
    </div>
  )
}
