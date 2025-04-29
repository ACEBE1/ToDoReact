import React, { useEffect, useState } from 'react'

export default function Card() {
    const [image,setImage] = useState([])

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(item => item.json() )
        .then(data => setImage(data) )
    },[])
  return (
    <div>
       {
          image.map(item => {
            return(
                <div class="card">
                    <img src={item.url} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                    </div>
                </div>
            )
          })
       }
    </div>
  )
}
