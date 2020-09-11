import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function Table(props) {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Table 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Customer {props.table.customer}/2</h4>
        <p>
          <Button onClick={props.less}>-</Button>
          {props.table.customer}
          <Button onClick={props.add}>+</Button>
        </p>
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
