import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Form } from "react-bootstrap";


import Demo from './AdminList';
import Postreport from './Postreport';
import axios from "axios";
import Button from '@material-ui/core/Button';
export default class Admin extends Component {

    statestate = {
        uid: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const updateuserrole = {
          uid: this.state.uid,
        };
        axios.put(
          "http://localhost:3000/api/user/userupdaterole",
          updateuserrole
        );
        console.log(updateuserrole)
      }

    uid = (e) => {
        this.setState({ uid: e.target.value })
    }

    render() {

        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Card style={{ width: '80rem' }}>
                    <Card />
                    <Card.Body>
                        <Card.Title>Admin Manager</Card.Title>
                        <Card.Text>จัดการเพิ่มหรือลบแอดมินออกจากระบบ รวมถึงจัดการโพสหรือบัญชื่อผู้ใช้ที่ถูกรายงาน</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>                          

                            <div>
                                <Postreport />
                            </div>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>เพิ่มแอดมิน</Form.Label>
                                    <Form.Control type="text" placeholder="ใส่ไอดีผู้ใช้ที่ต้องการเพิ่มเป็นแอดมิน" onChange={this.uid}/>
                                </Form.Group>
                                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                                    เพิ่มแอดมิน
                                </Button>
                            </Form>
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
