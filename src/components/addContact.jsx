import React from "react";
import { Form, Button } from "react-bootstrap";
import { AddNewContact } from "../actions/contactActions";
import { connect } from "react-redux";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      location: "",
    };
  }
  // ------------------------------all the methodes-----------------------------------------------------
  // handleChange defintion
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  //  handleSubmit Definition
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddNewContact(this.state);
    this.setState({
      name: "",
      phone: "",
      location: "",
    });
    console.log("item added");
  };
  // ------------------------------end of the methodes---------------------------------------------
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          {/* name input */}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label> name </Form.Label>
            <Form.Control
              type="txt"
              placeholder="Enter name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Form.Group>
          {/* phone input */}
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter phone number"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </Form.Group>
          {/* location input */}
          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="txt"
              placeholder="location"
              name="location"
              onChange={this.handleChange}
              value={this.state.location}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
const mapDispatchToProps = {
  AddNewContact,
};

export default connect(null, mapDispatchToProps)(Add);
