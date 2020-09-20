import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export default class Login extends Component {
  state = {
    name: '',
    password: '',
    loggedIn: false,
    role: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const register = {
      name: this.state.name,
      password: this.state.password,
    };
    console.log("http://localhost:3000/api/user/login?name="+this.state.name+'&&password='+this.state.password)
    axios.get(
      "http://localhost:3000/api/user/login?name="+this.state.name+'&&password='+this.state.password
    ).then((res)=>{
      if(res.status==200){
        //this.setState({ loggedIn: true, role: res.data.role, name: res.data.name })
        localStorage.setItem('uid', res.data.uid)
        localStorage.setItem('role',res.data.role)
        localStorage.setItem('name',res.data.name)
      }
      console.log(this.state.name)
    });
    console.log(register)
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
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" placeholder="Enter UserName" onChange={this.name}/>
              <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.password}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit"onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>

      </div>
    );

  }
}

