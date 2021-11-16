import React from "react";
import OneContact from "./oneContact";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

const ContactsDisplay = (props) => {
  return (
    <>
      <Container>
        <Row>
          {props.contacts.map((contact) => {
            return (
              <OneContact
                infoContact={contact}
                key={contact.id}
                deleteContact={props.deleteContact}
                editContact={props.editContact}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
export default connect(mapStateToProps)(ContactsDisplay);
