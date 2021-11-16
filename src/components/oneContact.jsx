import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import EditContact from "./edit";
import { deleteContact } from "../actions/contactActions";
import { connect } from "react-redux";

const OneContact = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // --------------------------the methode for handle delelte-----------------------
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteContact(props.infoContact.id);
    console.log("item deleted!");
  };

  //  -----------------------------end of handle delete--------------------------
  return (
    <>
      {/* --------------------the modal------------------- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContact
            infoContact={props.infoContact}
            editContact={props.editContact}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      {/* -------------------------------------------------------end of the modal */}
      {/* one card protype */}
      <Col md="4" style={{ marginTop: "1rem" }}>
        <Card style={{ width: "12rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Contacts Infos
            </Card.Subtitle>
            <Card.Title>name: {props.infoContact.name}</Card.Title>

            <Card.Text>
              <p>phone: {props.infoContact.phone}</p>
              <p>location: {props.infoContact.location}</p>
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
            <Button
              style={{ marginLeft: "1rem" }}
              variant="danger"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
const mapDispatchToProps = {
  deleteContact,
};
export default connect(null, mapDispatchToProps)(OneContact);
