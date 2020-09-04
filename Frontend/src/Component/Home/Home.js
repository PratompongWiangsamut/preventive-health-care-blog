import React, { Component } from "react";
import Tables from "./Table/Tables";


export default class Home extends Component {
  state = {
    table: {
      no: 1,
      customer: 0,
      detail: [null],
    },
  };

  render() {
    return (
      <div>
        <br />
        <Tables
          table={this.state.table}
          customerAdd={this.addCustomer}
          customerRemove={this.removeCustomer}
        />
      </div>
    );
  }
}
