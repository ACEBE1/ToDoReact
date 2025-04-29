import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext, { useTheme } from '../contexts/ThemeContext'
import '../App.css'

export default function Albums() {

    const[albums,setAlbums]=useState([])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then (data => setAlbums(data.slice(0,10)) )
    })    
    const {theme , setTheme} = useTheme(ThemeContext);

   
  return (
    <div className={theme} >
      <h1>Albums</h1>
        {
            albums.map(item => 
                <li key={item.id} > <Link to={`/album/${item.id}`} > APO {item.id}</Link> </li>
            )
        }
    </div>
  )
}
