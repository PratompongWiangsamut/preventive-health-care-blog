import React from "react";
import { Modal } from "react-bootstrap";

export default function Modals(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {props.children}
      </Modal>
    </div>
  );
}
