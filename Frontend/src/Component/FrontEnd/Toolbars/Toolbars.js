import React from "react";
import { Navbar, Nav,Form,FormControl,Button } from "react-bootstrap";
import {
  Route,
  /*NavLink,
  Switch,
  Redirect,*/
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "../Home/Home";
import Status from "../Write/Write";
import Edit from "../Profile/Profile";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Login from "./LoginMenupop";
const Aux = (props) => {
  return props.children;
};



export default function Toolbars() {
  
  return (
    <Router>
      <div>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">Preventive Health Care Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <DropdownButton id="dropdown-basic-button" title="แท็ก">
                    <Dropdown.Item href="/edit">การกิน</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">การออกกำลังกาย</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">การพักผ่อน</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">การใช้ชีวิต</Dropdown.Item>
                    </DropdownButton>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                   <Button variant="outline-success">Search</Button>
                </Form>
                <Nav.Link href="/status">เขียนบทความ</Nav.Link>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <DropdownButton id="dropdown-basic-button" title="Login">
                    <Dropdown.Item href="/edit">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Admin</Dropdown.Item>
                    </DropdownButton>
                  </div>
                
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <Route path="/home" component={Home} />
        <Route path="/status" component={Status} />
        <Route path="/edit" component={Edit} />
      </div>
    </Router>
  );
}
