import React, { useEffect, useState } from 'react'

export default function DisplayUser() {
    const [list,setList]=useState([])
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json() )
        .then(data => setList(data) )
    }, [list])
   
  return (
    <div>
      Fetch Apı ile Listeleme
        <h1>Users</h1>
        {
            list.map(user => 
            <ul>
                <li >{user.id}</li> 
                <li >{user.name}</li> 
                <li >{user.address.city}</li> 
            </ul>
            )
        }
    </div>
  )
}
