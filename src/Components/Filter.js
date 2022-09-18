import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

class Filter extends Component {
    handleClick=(e)=>{
        this.props.handleFilter(e.target.value)
    }

  render() {
    return (
      <div>
       
      <Form.Group className="mb-3" onClick={this.handleClick}>
        <Form.Label>Select the Horned Beast based on no. of horns</Form.Label>
        <Form.Select>
          <option value={0}>All</option>
          <option value={1}>One horns</option>
          <option value={2}>Two horns</option>
          <option value={3}>Three horns</option>
          <option value={100}>100 horns</option>
        </Form.Select>
      </Form.Group>
   
      </div>
    )
  }
}

export default Filter