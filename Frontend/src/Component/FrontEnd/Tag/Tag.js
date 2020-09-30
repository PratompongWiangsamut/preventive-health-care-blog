import React, { Component } from "react";
import { Card, Button, } from "react-bootstrap";
import axios from 'axios'

export default class Tag extends Component {
  state = {
    showmodal: false,
    post: []
  };

  componentDidMount(){
    var url = window.location.href.split('/')[4]
    console.log('asfasf', url)
    axios.get('http://localhost:3000/api/post/posttag/'+url).then((res)=>{
      console.log('pre-data: ', res.data)
      this.setState({post: res.data})
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
    var posts = this.state.post.map((item)=>
    <Card className="text-center" key={item.pid}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.tex}
          </Card.Text>
          <Button href={"/readpost/"+item.pid}>Read Post</Button>
        </Card.Body>
  <Card.Footer className="text-muted">{item.tag}</Card.Footer>
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

        {posts}
      </div>
    );
  }
}
