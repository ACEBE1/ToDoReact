import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'
export default function Posts() {

    const[list,setList]=useState([])

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setList(data.slice(0,10)) )
    })
   
   const {theme , setTheme }= useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>Post Detail</h1>
        {
            list.map(post =>
             <li key={post.id} > <Link to={`/post/${post.id}`} >Post No {post.id}</Link>  </li> )
        }
    </div>
  )
}
