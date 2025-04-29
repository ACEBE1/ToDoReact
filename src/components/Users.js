import React, { useContext, useEffect, useState } from 'react'
import {Link, Outlet, Route, Routes} from "react-router-dom";
import User from './User';
import ThemeContext from '../contexts/ThemeContext';

export default function Users() {
    const[list,setList]=useState([])

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res =>res.json() )
        .then(data => setList(data.slice(0,10)) )
    } ,[])

    const {theme , setTheme } =useContext(ThemeContext);



  return (
    <div className={theme}>
      <h2>Users List</h2>
    {
        list.map(user=> 
        <li key={user.id} > <Link to={`/users/${user.id}`} >{user.name}</Link> </li> )
    }
    <Outlet/>
    </div>
  )
}
