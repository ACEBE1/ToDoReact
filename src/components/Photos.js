import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'

export default function Photos() {
    const[photos,setPhotos]= useState([])


    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => setPhotos(data.slice(0,10)))

    }, [])
    const{theme,setTheme } = useContext(ThemeContext)
  return (
    <div className={theme} >
        <h1>PHOTOLAR</h1>
        {
            photos.map( item => 
                <li key={item.id} > <Link to={`/photo/${item.id}`} > Photo No: {item.id}</Link> </li>
             )
        }
    </div>
  )
}
