import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Card, CardBody, CardLink, CardText, CardTitle, ListGroup, ListGroupItem} from 'reactstrap';

export default function User() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Card" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{(user.name)} </CardTitle>
          <CardText>{(user.username)}</CardText>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>{(user?.address?.street)}</ListGroupItem>
        
        </ListGroup>
        <CardBody>
        <Link to={`/user/${parseInt(id)+1}`}>NextUSER</Link>
        
        <Link to={`/user/${parseInt(id)-1}`}>NextUSER</Link>
        </CardBody>
      </Card>
    </div>
  );
}
