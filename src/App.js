import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Add from "./components/addContact";
import ContactsDisplay from "./components/contacts";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllContacts } from "./actions/contactActions";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   contacts: [
    //     {
    //       name: "diallo",
    //       phone: "0240958845",
    //       location: "abofu",
    //       id: "89542gcvbire1234",
    //     },
    //     {
    //       name: "Bah",
    //       phone: "0240958845",
    //       location: "cobaya",
    //       id: "45667vbcvcdscv086",
    //     },
    //   ],
    // };
  }
  // add new users methode----------------------------------------------
  // AddNewContact = (newContact) => {
  //   newContact.id = Math.random().toString();
  //   this.setState({
  //     contacts: [...this.state.contacts, newContact],
  //   });
  // };
  // delete contact--------------------------------------------------
  // deleteContact = (id) => {
  //   let undeletedContacts = this.state.contacts.filter(
  //     (newContact) => newContact.id !== id
  //   );
  //   this.setState({
  //     contacts: undeletedContacts, Qaq
  //   });
  // };
  // ------------------------edit a contact------------------------------
  // editContact = (id, updetedContact) => {
  //   this.setState({
  //     contacts: this.state.contacts.map((contact) =>
  //       contact.id === id ? updetedContact : contact
  //     ),
  //   });
  // };
  // -------------------------------------
  componentDidMount() {
    this.props.getAllContacts();
  }
  render() {
    return (
      <>
        <Container
          fluid
          style={{ marginTop: "2rem", backgroundColor: "lightpink" }}
        >
          <Row>
            <Col md="4">
              <h3 style={{ textDecoration: "underline" }}>add contacts</h3>
              <Add AddNewContact={this.AddNewContact} />
            </Col>

            <Col md="6">
              <h3 style={{ textDecoration: "underline" }}>display contacts</h3>
              <ContactsDisplay
              // data={this.state.contacts}
              // deleteContact={this.deleteContact}
              // editContact={this.editContact}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const mapDispatchToProps = {
  getAllContacts,
};
export default connect(null, mapDispatchToProps)(App);
