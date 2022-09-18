import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from "react-bootstrap/Card";

class SelectedBeast extends Component {

  render() {
    return (
      <div>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selected.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card.Img
              variant="top"
              src={this.props.selected.image_url}
              alt="pic"
              height="250px"
            />
            <h5>{this.props.selected.description}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    
      </div>
    )
  }
}

export default SelectedBeast