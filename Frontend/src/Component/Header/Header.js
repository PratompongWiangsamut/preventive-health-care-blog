import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  Route,
  /*NavLink,
  Switch,
  Redirect,*/
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "../Home/Home";
import Status from "../Status/Status";
import Edit from "../EditMenu/EditMenu";

export default function Toolbars() {
  return (
    <Router>
      <div>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home">หน้าแรก</Nav.Link>
                <Nav.Link href="/status">แท็ก</Nav.Link>
                <Nav.Link href="/edit">เขียนบทความ</Nav.Link>
                
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
