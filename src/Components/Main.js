import React, { Component } from "react";
import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";

class Main extends Component {
  render() {
    return (
      <div>
        <Row xs={1} md={4} className="g-4">
          {this.props.data.map((item) => {
            return (
              <HornedBeast
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                horns={item.horns}
                openModal ={this.props.openModal}
              />
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Main;
