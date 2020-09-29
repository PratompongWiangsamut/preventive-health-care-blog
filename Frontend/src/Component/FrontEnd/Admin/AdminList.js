import React, { Component } from "react";
import { Card, Button, } from "react-bootstrap";
import axios from 'axios'




export default class Tables extends Component {
  state = {
    showmodal: false,
    post: [],
    uid:''
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/user/userrole/' + 2).then((res) => {
      console.log('pre-data: ', res.data)
      this.setState({ post: res.data })
      console.log('post-data: ', this.state.post)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const deleteadmin = {
      uid: this.state.uid
    };
    axios.put(
      "http://localhost:3000/api/user/deleteadmin",
      deleteadmin
    );
    console.log(deleteadmin)
  }

  showmodalHandler = () => {
    this.setState({ showmodal: true });
  };

  showmodalCancelHandler = () => {
    this.setState({ showmodal: false });
  };
  render() {
    var posts = this.state.post.map((item) =>
      <Card className="text-center" key={item.uid}>
        <Card.Header>ชื่อ:{item.name}/UID:{item.uid}/Role:{item.role}<Button variant="primary" onClick={this.handleSubmit}>ลบ</Button></Card.Header>
        
        <Card.Footer className="text-muted" >{item.tag}</Card.Footer>
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
