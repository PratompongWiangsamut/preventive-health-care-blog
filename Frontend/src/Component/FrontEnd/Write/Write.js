import React, { Component } from "react";
//import Modals from "../Modals/Modals";
import classes from "./Write.module.css";
import { Form,Card } from "react-bootstrap";
import axios from "axios";
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default class Write extends Component {
  state = {
    title: '',
    tag: '',
    tex: '',
    rank: 0,
    report:0,
    uid:localStorage.getItem('uid')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {
      title: this.state.title,
      tag: this.state.tag,
      tex: this.state.tex,
      rank: this.state.rank,
      uid: this.state.uid,
      report:this.state.report,
    };
    axios.post(
      "http://localhost:3000/api/post/post",
      post
    );
    console.log(post)
  }

  title = (e) => {
    this.setState({ title: e.target.value })
  }

  tag = (e) => {
    this.setState({ tag: e.target.value })
  }

  tex = (e) => {
    this.setState({ tex: e.target.value })
  }
 
  render() {
    

    return (
      <div>
         <Card style={{flex:1, backgroundColor:'#F8F9F5'}}>
        <Card.Header><ArrowRightIcon/>เขียนโพส</Card.Header>
      
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:'#ffffff'
          }}
        >
      <div className={classes.Status}>
     
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>ชื่อเรื่อง</Form.Label>
          <Form.Control type="text" placeholder="title" onChange={this.title} />
          </Form.Group>
          <Form.Group controlId="tag"  >
            <Form.Label>Tag</Form.Label>
            <Form.Control as="select" onChange={this.tag}>
              <option>เลือกแท็ก</option>
              <option>การกิน</option>
              <option>การออกกำลังกาย</option>
              <option>การพักผ่อน</option>
              <option>ความเสี่ยงโรค</option>
            </Form.Control >
          </Form.Group>
          <Form.Group controlId="tag">
            <Form.Label>เนื้อหา</Form.Label>
            <Form.Control as="textarea" rows="3" onChange={this.tex} />
          </Form.Group>
          {(localStorage.getItem('uid'))?(
                      <Button variant="contained" color="primary" onClick={this.handleSubmit}>โพส</Button>
                    ):(
                      <>Pls login</>
                    )}
          {/* <Button variant="primary" onClick={this.handleSubmit}>โพส</Button> */}
        </Form>
    
      </div>
      
      </div>
      </Card>
      </div>
    );
    
  }
}
