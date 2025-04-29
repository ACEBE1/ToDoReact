import React, { useEffect, useState } from "react";
import { Link,useParams } from 'react-router-dom';
import {Card, CardBody, CardText, CardTitle, ListGroup, ListGroupItem} from 'reactstrap';




export default function Post() {
  const { id } = useParams();

  const[post,setPost]=useState([])

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=> res.json() )
    .then(data => setPost(data))
  })

  return (
    <div>
      <h1>Post:{id}</h1>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Card" src={`https://picsum.photos/id/${id}/300/200`} />
        <CardBody>
          <CardTitle tag="h5"> {(post.id)}</CardTitle>
          <CardText> {(post.title)}</CardText>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>{(post.body)}</ListGroupItem>
        
        </ListGroup>
        <CardBody>
        <Link to={`/post/${parseInt(id)-1}`}>NextUSER</Link>
        
        <Link to={`/post/${parseInt(id)+1}`}>NextUSER</Link>
        </CardBody>
      </Card>

    </div>
  )
}
