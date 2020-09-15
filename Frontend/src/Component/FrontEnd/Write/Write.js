import React, { Component } from "react";
//import Modals from "../Modals/Modals";
import classes from "./Write.module.css";
import { Form,Button } from "react-bootstrap";

export default class Write extends Component {
 
  render() {
    return (
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
      <div className={classes.Status}>
        
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>ชื่อเรื่อง</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Tag</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>เนื้อหา</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary">โพส</Button>
        </Form>
      </div>
      
      </div>
    );
    
  }
}
