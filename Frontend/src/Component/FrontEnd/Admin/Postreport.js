import React, { Component } from "react";
import { Card,Button } from "react-bootstrap";
import axios from 'axios'


export default class Postreport extends Component {
  
  state = {
    showmodal: false,
    post: [],
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('uid',e.target.id)
    //this.setState({ uid: e.target.id })
    const deletepost = {
      uid: e.target.id
    };
    axios.delete(
      "http://localhost:3000/api/post/deletepost/"+e.target.id,
      deletepost
    );
    console.log(deletepost)
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/post/reportlist/' + 1).then((res) => {
      console.log('pre-data: ', res.data)
      this.setState({ post: res.data })
      console.log('post-data: ', this.state.post)
    })
  }

  render() {
    var posts = this.state.post.map((item) =>
      <Card className="text-center" key={item.pid}>
        <Card.Header>ชื่อเรื่อง:{item.title}/โดย:{item.uid}<Button variant="primary" id={item.pid} onClick={this.handleSubmit}>ลบ</Button></Card.Header>
        
        <Card.Footer className="text-muted" >{item.tag}</Card.Footer>
      </Card>

    )
    return (
        
                   
                    <div>
                        {posts}
                    </div>
                    
            
    );
  }
}
