import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from 'axios'




export default class Tables extends Component {
    state = {
        showmodal: false,
        comment: []
    };

    componentDidMount() {
        var url = window.location.href.split('/')[4]
        console.log('pid', url)
        axios.get('http://localhost:3000/api/comment/commentpid/' + url).then((res) => {
            console.log('pre-data: ', res.data)
            this.setState({ comment: res.data })
            console.log('comment-data: ', this.state.comment)
        })
    }

    showmodalHandler = () => {
        this.setState({ showmodal: true });
    };

    showmodalCancelHandler = () => {
        this.setState({ showmodal: false });
    };
    render() {
        var comments = this.state.comment.map((item) =>
            <Card>
                <Card.Header>
                    คอมเมนท์ที่#{item.cid}
                </Card.Header>
                <Card.Body>
                    {item.detail}
                </Card.Body>
                <Card.Footer>
                    จาก..{item.uid}
                </Card.Footer>
            </Card>
        )
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

                {comments}
            </div>
        );
    }
}
