import React from "react";
import Pic from "../../../assets/images/sushi_set.jpg";
import Pic1 from "../../../assets/images/SushiMenu/1.png";
import { Button, Modal, Card, Row, Form, Col } from "react-bootstrap";
export default function EditMenupop(props) {
  return (
    <div>
      <Modal.Header closeButton>
        <Card.Img
          variant="top"
          src={Pic}
          style={{
            alignSelf: "center",
            border: "2px solid #eee",
            height: 150,
            width: 150,
          }}
        />
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="4">
              ชื่อหมวดหมู่
            </Form.Label>
            <Col sm="7">
              <Form.Control
                placeholder="Name category"
                value={props.category.nameCat}
                onChange={props.changeName}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Header>
      <Modal.Body>
        <Card.Img
          variant="top"
          src={Pic1}
          style={{
            alignSelf: "center",
            border: "2px solid #eee",
            height: 150,
            width: 150,
          }}
        />
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="1">
              Name
            </Form.Label>
            <Col sm="5">
              <Form.Control
                value={props.category.menu[0].name}
                onChange={props.changeNameFood}
              />
            </Col>
            <Form.Label column sm="1">
              Price
            </Form.Label>
            <Col sm="5">
              <Form.Control
                value={props.category.menu[0].price}
                onChange={props.changePrice}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save</Button>
        <Button onClick={props.onHide} variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </div>
  );
}
