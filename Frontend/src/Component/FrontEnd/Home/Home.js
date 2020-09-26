import React, { Component } from "react";
import Posts from "./Post/Posts";
import { Dropdown, DropdownButton } from "react-bootstrap";

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
          <DropdownButton id="dropdown-basic-button" title="Sort button">
            <Dropdown.Item href="#/action-1">บทความล่าสุด</Dropdown.Item>
            <Dropdown.Item href="#/action-2">บทความยอดนิยม</Dropdown.Item>
          </DropdownButton>
        </div>
        <Posts/>
      </div>
    );
  }
}
