import React, { Component } from "react";
import Posts from "./Post/Posts";
import Postsorder from "./Post/Postorder";
import Recomment from "./Post/Recomment";
import Button from '@material-ui/core/Button';
import { Card } from "react-bootstrap";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import axios from 'axios'



export default class Home extends Component {

  state = {
    posttype: 1,
    repid: 0,
    uid: localStorage.getItem('uid'),
  };
  componentDidMount() {
    axios.get('http://localhost:3000/api/comment/recomment/' + this.state.uid).then((res) => {
      console.log('pre-data: ', res.data)
      this.setState({ repid: res.data.pid })
      console.log('repid: ', this.state.repid)
      console.log('uid: ', this.state.uid)
    }).then(() => {
      axios.get('http://localhost:3000/api/post/postid/' + this.state.repid).then((res) => {
        console.log('pre-data: ', res.data)
        this.setState({ tag: res.data.tag })
        localStorage.setItem('tag', res.data.tag);
        console.log('retag: ', this.state.tag)
      })
    })
  }



  render() {
    return (
      <div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" color="primary" onClick={() => { this.setState({ posttype: 1 }) }}>
            บทความล่าสุด
          </Button>
          <Button variant="contained" color="primary" onClick={() => { this.setState({ posttype: 2 }) }}>
            บทความยอดนิยม
          </Button>
          <Button variant="contained" color="primary" onClick={() => { this.setState({ posttype: 3 }) }}>
            บทความแนะนำ
          </Button>
        </div>
        <Card style={{ flex: 1, backgroundColor: '#F8F9F5' }}>
          <Card.Header><ArrowRightIcon />
            {(this.state.posttype == 1) ? (
              'บทความล่าสุด'
            ) : (
                ''
              )}{(this.state.posttype == 2) ? (
                'บทความยอดนิยม'
              ) : (
                  ''
                )}{(this.state.posttype == 3) ? (
                  'บทความแนะนำ'
                ) : (
                    ''
                  )}
          </Card.Header>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            {(this.state.posttype == 1) ? (
              <Posts />
            ) : (
                ''
              )} {(this.state.posttype == 2) ? (
                <Postsorder />
              ) : (
                  ''
                )} {(this.state.posttype == 3) ? (
                  <Recomment />
                ) : (
                    ''
                  )}
          </div>

        </Card>

        {/* <Posts/> */}
      </div>
    );
  }
}
