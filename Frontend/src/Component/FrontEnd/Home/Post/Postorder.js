import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from 'axios'
import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';




export default class Post extends Component {
    state = {
        showmodal: false,
        post: []
    };

    componentDidMount() {
        axios.get('http://localhost:3000/api/post/sort').then((res) => {
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
        var posts = this.state.post.map((item) =>
            <Card className="text-center" style={{ width: '50rem', border: "3px solid lightgrey", borderRadius: "10px", margin: "5px", }} key={item.pid}>
                <Card.Header>Featured{item.title}</Card.Header>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.tex}
                    </Card.Text>

                    <Button variant="contained" href={"/readpost/" + item.pid}>Read Post</Button>


                </Card.Body>
                <Card.Footer className="text-muted">{item.tag}</Card.Footer>
            </Card>

        )
        return (
            <div >
                {posts}
            </div>
        );
    }
}
