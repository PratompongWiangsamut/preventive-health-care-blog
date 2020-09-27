import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import axios from 'axios'

export default class Tables extends Component {
    state = {
        showmodal: false,
        post: [],
        pid: 1,
        detail: '',
        uid:localStorage.getItem('uid')
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const comment = {
          pid: this.state.pid,
          detail: this.state.detail,
          uid: this.state.uid,
        };
        axios.post(
          "http://localhost:3000/api/comment/comment",
          comment
        );
        console.log(comment)
      }

    detail = (e) => {
        this.setState({ detail: e.target.value })
      }
    
    componentDidMount() {
        var url = window.location.href.split('/')[4]
        console.log('asfasf', url)
        axios.get('http://localhost:3000/api/post/postid/' + url).then((res) => {
            console.log('pre-data: ', res.data)
            this.setState({ post: res.data })
            console.log('post-data: ', this.state.post)
        })
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
                    <Card.Footer className="text-muted">โดย {this.state.post.uid}</Card.Footer>
                </Card>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Card>
                        <Form>
                            <Form.Group controlId="comment">
                                <Form.Label>ความคิดเห็น</Form.Label>
                                <Form.Control as="textarea" rows="3" onChange={this.detail}/>
                            </Form.Group>
                            <Button variant="primary" onClick={this.handleSubmit} >comment</Button>
                        </Form>
                    </Card>

                    

                </div>
                <Card>
                        <Card.Header>
                            คอมเมนท์ที่#1
                        </Card.Header>
                        <Card.Body>
                            ทำได้ดีมากไอ่ชาย
                        </Card.Body>
                        <Card.Footer>
                            จาก..คนที่คุณก็รู้ว่าใคร
                        </Card.Footer>
                    </Card>


            </div>
        );
    }
}
