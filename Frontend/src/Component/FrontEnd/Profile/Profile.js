import React, { Component } from "react";
import { Card,ListGroup,ListGroupItem,Button } from "react-bootstrap";
import ProfilePost from '../Profile/ProfilePost/ProfilePost'

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
        {/* <Card className="text-center">
          <Card.Header>บทความที่1</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card> */}
        <ProfilePost/>
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
