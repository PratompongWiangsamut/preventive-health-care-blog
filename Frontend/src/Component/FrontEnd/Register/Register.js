import React, { Component } from "react";
import {  Form } from "react-bootstrap";
import axios from "axios";
import Button from '@material-ui/core/Button';



export default class Register extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    role: 'user'
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const register = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      role: this.state.role,
    };
    axios.post(
      "http://localhost:3000/api/user/user",
      register
    );
    console.log(register)
  }

  email = (e) => {
    this.setState({ email: e.target.value })
  }

  name = (e) => {
    this.setState({ name: e.target.value })
  }

  password = (e) => {
    this.setState({ password: e.target.value })
  }

  

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div >

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={this.email}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" placeholder="User name" onChange={this.name}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.password}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}> Submit </Button>
          </Form>
        </div>

      </div>
    );

  }
}




