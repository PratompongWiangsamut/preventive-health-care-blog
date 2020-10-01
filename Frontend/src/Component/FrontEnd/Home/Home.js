import React, { Component } from "react";
import Posts from "./Post/Posts";
import Button from '@material-ui/core/Button';

export default class Home extends Component {

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
          <Button variant="contained" color="primary">
            บทความยอดนิยม
          </Button> 
        </div>
        <Posts/>
      </div>
    );
  }
}
