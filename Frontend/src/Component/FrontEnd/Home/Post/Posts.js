import React, { Component } from "react";
import { Card, Button, } from "react-bootstrap";

export default class Tables extends Component {
  state = {
    showmodal: false,
  };

  showmodalHandler = () => {
    this.setState({ showmodal: true });
  };

  showmodalCancelHandler = () => {
    this.setState({ showmodal: false });
  };
  render() {
    return (
      <div >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        </div>

        
      </div>
    );
  }
}
