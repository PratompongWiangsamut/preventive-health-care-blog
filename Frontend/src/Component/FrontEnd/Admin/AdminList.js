import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from 'axios'
import Button from '@material-ui/core/Button';



export default class Tables extends Component {
  state = {
    showmodal: false,
    post: [],
    uid:''
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/user/userrole/' + "Admin").then((res) => {
      console.log('pre-data: ', res.data)
      this.setState({ post: res.data })
      console.log('post-data: ', this.state.post)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('uid',e.target.id)
    //this.setState({ uid: e.target.id })
    const deleteadmin = {
      uid: e.target.id
    };
    axios.put(
      "http://localhost:3000/api/user/deleteadmin",
      deleteadmin
    );
    console.log(deleteadmin)
  }

  // clicksetstate=()=>{
  //   this.setState({uid: item.uid})
  // }

  showmodalHandler = () => {
    this.setState({ showmodal: true });
  };

  showmodalCancelHandler = () => {
    this.setState({ showmodal: false });
  };
  render() {
    var posts = this.state.post.map((item) =>
      <Card className="text-center" key={item.uid}>
        <Card.Header>ชื่อ:{item.name}/UID:{item.uid}/Role:{item.role}<Button variant="contained" color="secondary" id={item.uid} onClick={this.handleSubmit}>ลบ</Button></Card.Header>
        
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
