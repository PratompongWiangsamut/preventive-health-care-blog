import React, { Component } from "react";
import Tables from "./Post/Posts";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default class Home extends Component {
  state = {
    table: {
      no: 1,
      customer: 0,
      detail: [null],
    },
  };

  addCustomer = () => {
    const oldCount = this.state.table.customer;
    const updateCoute = oldCount + 1;
    const updateTable = {
      ...this.state.table,
    };
    updateTable.customer = updateCoute;
    this.setState({ table: updateTable });
  };

  removeCustomer = () => {
    const oldCount = this.state.table.customer;
    const updateCoute = oldCount - 1;
    const updateTable = {
      ...this.state.table,
    };
    updateTable.customer = updateCoute;
    this.setState({ table: updateTable });
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
          <DropdownButton id="dropdown-basic-button" title="Sort button">
            <Dropdown.Item href="#/action-1">โต๊ะทั้งหมด</Dropdown.Item>
            <Dropdown.Item href="#/action-2">โต๊ะว่าง</Dropdown.Item>
          </DropdownButton>
        </div>
        <Tables
          table={this.state.table}
          customerAdd={this.addCustomer}
          customerRemove={this.removeCustomer}
        />
      </div>
    );
  }
}
