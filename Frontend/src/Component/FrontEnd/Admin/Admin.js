import React, { Component } from "react";
import { Card,ListGroup,ListGroupItem,Button,Dropdown,DropdownButton } from "react-bootstrap";
import {
    Route,
    /*NavLink,
    Switch,
    Redirect,*/
    BrowserRouter as Router,
  } from "react-router-dom";

import Demo from './demo';
import Postreport from './Postreport';
export default class Admin extends Component {
  
  render() {
    
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Card  style={{ width: '80rem' }}>
            <Card />
                <Card.Body>
                    <Card.Title>Admin Manager</Card.Title>
                    <Card.Text>จัดการเพิ่มหรือลบแอดมินออกจากระบบ รวมถึงจัดการโพสหรือบัญชื่อผู้ใช้ที่ถูกรายงาน</Card.Text>
                </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                <Router>
                <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
    >
                        <DropdownButton id="dropdown-basic-button" title="Sort button">
                            <Dropdown.Item href="/postreport">บทความที่ถูกรายงาน</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">บัญชีผู้ใช้ที่ถูกรายงาน</Dropdown.Item>
                            <Dropdown.Item href="/demo">จัดการแอดมิน</Dropdown.Item>
                        </DropdownButton>
                        <Route path="/demo" component={Demo} />
                        <Route path="/postreport" component={Postreport} />

                    </div>
                </Router>
                    
                    <div>
                        <Card className="text-center">
                            <Card.Header>บทความที่1</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                                <Button variant="primary">Read more</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </div>
                    <Demo />
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            
        </div>
    );
  }
}
