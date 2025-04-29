import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'

export default function Navbar() {
    const {theme,setTheme} = useContext(ThemeContext);


  return (
    <div>
         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li> 
            <li>
              <Link to="/weather-app">Weather App</Link>
            </li> 
            <li><button onClick={() => setTheme(theme === 'dark' ? 'light' :'dark' ) }>Change Theme</button> </li>         
          </ul>
        </nav>
    </div>
  )
}
