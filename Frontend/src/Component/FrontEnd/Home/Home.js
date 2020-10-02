import React, { Component } from "react";
import Posts from "./Post/Posts";
import Postsorder from "./Post/Postorder";
import Button from '@material-ui/core/Button';

export default class Home extends Component {

  state = {
    posttype: 1,
  };

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
        </div>
        {(this.state.posttype == 1) ? (
          <Posts />
        ) : (
          <Postsorder />
          )}
        {/* <Posts/> */}
      </div>
    );
  }
}
