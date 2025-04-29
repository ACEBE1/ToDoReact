import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Photo() {
    const{id}=useParams()

    const[photo,setPhoto] =useState([])

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => setPhoto(data) )
    },[])
  return (
    <div>
      <h1>Photo</h1>
       <h2> İD: {photo.id}</h2>

       
    </div>
  )
}
