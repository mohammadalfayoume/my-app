import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


class HornedBeast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heart: "",
    };
  }

  handleClick = () => {
    this.props.openModal(this.props.title)
    this.setState({
      heart: this.state.heart + "💚",
    });
  };


  render() {
    return (
      <div>
        <Col>
          <Card style={{ height: "450px" }}>
            <Card.Img
              variant="top"
              src={this.props.imageUrl}
              alt="pic"
              onClick={this.handleClick}
              height="250px"
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                <h5>No. of horns: {this.props.horns}</h5>
                <h5>Favorate: {this.state.heart}</h5>
              </Card.Text>
              <Button onClick={()=> this.props.openModal(this.props.title)}>Show the Modal</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default HornedBeast;
