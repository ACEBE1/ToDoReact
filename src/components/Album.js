import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Album() {
const {id} =useParams() 

const [album,setAlbum]=useState([])

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    .then(res => res.json())
    .then(data => setAlbum(data))

},[] )

  return (
    <div>
      <h1>Album {id}</h1>
      <h3>Album Title {album.title}</h3>
      
    </div>
  )
}
