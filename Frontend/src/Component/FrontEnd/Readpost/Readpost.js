import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import axios from 'axios'
import Comments from "../Readpost/Comment/Comment"

export default class Tables extends Component {
    state = {
        showmodal: false,
        post: [],
        comment: [],
        pid: null,
        detail: '',
        uid: localStorage.getItem('uid'),
        rate:''
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const comment = {
            pid: this.state.pid,
            detail: this.state.detail,
            uid: this.state.uid,
            rate:this.state.rate
        };
        axios.post(
            "http://localhost:3000/api/comment/comment",
            comment
        );
        console.log(comment)
    }

    reportpost = (e) => {
        e.preventDefault()
        console.log('pid',e.target.id)
        //this.setState({ uid: e.target.id })
        const deleteadmin = {
          pid: e.target.id
        };
        axios.put(
          "http://localhost:3000/api/post/report",
          deleteadmin
        );
        console.log(deleteadmin)
      }

    

    detail = (e) => {
        this.setState({ detail: e.target.value })
    }
    rate = (e) => {
        this.setState({ rate: e.target.value })
    }

    componentDidMount() {
        var url = window.location.href.split('/')[4]
        console.log('asfasf', url)
        axios.get('http://localhost:3000/api/post/postid/' + url).then((res) => {
            console.log('pre-data: ', res.data)
            this.setState({ post: res.data })
            console.log('post-data: ', this.state.post)
            localStorage.setItem('pid', url)

        })
        this.setState({ pid: url })

    }

    showmodalHandler = () => {
        this.setState({ showmodal: true });
    };

    showmodalCancelHandler = () => {
        this.setState({ showmodal: false });
    };
    render() {

        return (
            <div >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                </div>

                <Card className="text-center" key={this.state.post.pid}>
                    <Card.Header>Post ID  #{this.state.post.pid}</Card.Header>
                    <Card.Body>
                        <Card.Title>ชื่อ: {this.state.post.title} </Card.Title>
                        <Card.Text>
                            คะแนนเฉลี่ย: {this.state.post.rank} Tag {this.state.post.tag}
                        </Card.Text>
                        <Card.Text>
                            {this.state.post.tex}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">โดย {this.state.post.uid} <Button variant="primary" id={this.state.post.uid} onClick={this.reportpost}>Report</Button></Card.Footer>
                </Card>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                    <Card>
                        <Form>
                            <Form.Group controlId="comment">
                                <Form.Control as="select" onChange={this.rate}>
                                    <option>ให้คะแนน</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Form.Control >
                                <Form.Label>ความคิดเห็น</Form.Label>
                                <Form.Control as="textarea" rows="3" onChange={this.detail} />
                            </Form.Group>
                            <Button variant="primary" onClick={this.handleSubmit} >comment</Button>
                        </Form>
                    </Card>



                </div>
                <Comments
                    pid={this.state.pid}
                />

            </div>
        );
    }
}
