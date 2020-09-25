import React, { Component } from "react";
import { Card,ListGroup,ListGroupItem,Button } from "react-bootstrap";
import Posts from "./Post/Posts";

export default class EditMenu extends Component {
  
    
  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        
       
        <Card  style={{ width: '80rem' }}>
  <Card />
  <Card.Body>
    <Card.Title>{localStorage.getItem('name')}</Card.Title>
    <Card.Text>
      เคยเขียนบทความมาแล้ว (จำนวนบทความ) บทความ
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
      <div>
        <Posts/>
      </div>
    </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
      </div>
    );
  }
}
