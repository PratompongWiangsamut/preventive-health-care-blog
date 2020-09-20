import React from "react";
import { Navbar, Nav,Form,FormControl,Button } from "react-bootstrap";
import {
  Route,
  /*NavLink,
  Switch,
  Redirect,<Dropdown.Item onClick={}>Logout</Dropdown.Item>*/
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "../Home/Home";
import Write from "../Write/Write";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import Register from "../Register/Register";
import { Dropdown, DropdownButton } from "react-bootstrap";




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
                    <Dropdown.Item href="/profile">การกิน</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">การออกกำลังกาย</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">การพักผ่อน</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">การใช้ชีวิต</Dropdown.Item>
                    </DropdownButton>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                   <Button variant="outline-success">Search</Button>
                </Form>
                <Nav.Link href="/write">เขียนบทความ</Nav.Link>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >{!localStorage.getItem('uid')
                    ?<DropdownButton id="dropdown-basic-button"
                     title="Login"
                     >
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                    <Dropdown.Item href="/register">Register</Dropdown.Item>
                    </DropdownButton>
                    :<DropdownButton id="dropdown-basic-button"
                    title={localStorage.getItem('name')}
                    >
                   <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                   <Dropdown.Item href="/admin">Admin</Dropdown.Item>
                   
                   </DropdownButton>}
                  </div>
                
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <Route path="/home" component={Home} />
        <Route path="/write" component={Write} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}
