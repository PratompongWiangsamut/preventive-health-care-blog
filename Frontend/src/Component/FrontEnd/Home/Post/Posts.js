import React, { Component } from "react";
import Table from "./Post";
import classes from "./Tables.module.css";
import Modals from "../../Modals/Modals";
import { Card, Button, CardDeck } from "react-bootstrap";
import Pic from "../../../../assets/images/plus.png";

export default class Tables extends Component {
  state = {
    showmodal: false,
  };

  showmodalHandler = () => {
    this.setState({ showmodal: true });
  };

  showmodalCancelHandler = () => {
    this.setState({ showmodal: false });
  };
  render() {
    return (
      <div className={classes.Tables}>
        <CardDeck>
          <Card>
            <Card.Header as="h5">Table 1</Card.Header>
            <Card.Body>
              <Card.Title>Customer {this.props.table.customer}/2</Card.Title>
              <Button variant="primary" onClick={this.showmodalHandler}>
                Detail
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className={classes.NewTable}>
            <Card.Img variant="top" src={Pic} />
          </Card>
        </CardDeck>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        </div>

        <Modals
          show={this.state.showmodal}
          onHide={this.showmodalCancelHandler}
        >
          <Table
            onHide={this.showmodalCancelHandler}
            add={this.props.customerAdd}
            less={this.props.customerRemove}
            table={this.props.table}
          />
        </Modals>
      </div>
    );
  }
}
