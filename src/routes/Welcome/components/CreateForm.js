import React from 'react'
import { FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

class CreateForm extends React.Component {
    constructor() {
        super();
        this.state = {value:""}
    }

    getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

    render() {
        
        return (
            <div className="card prev-form">
                <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>First Name</ControlLabel>
          <FormGroup controlId="formInlineName">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <button type="button" className="btn plus navbar-btn">
        <span className="glyphicon glyphicon-plus"></span>
        </button>
        </FormGroup>
        
          <br />
           <ControlLabel>Second Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <br />
           <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <br />
          <ControlLabel>Language Proficiency</ControlLabel>
          <FormGroup validationState="">
              <Checkbox inline>
                Checkbox
              </Checkbox>
              {' '}
              <Checkbox inline>
                with
              </Checkbox>
              {' '}
              <Checkbox inline>
                success
              </Checkbox>
            </FormGroup>
        </FormGroup>
        <br />
        <button type="button" className="btn plus">
        <span className="glyphicon glyphicon-plus"></span>
        </button>
      </form>
            </div>
        )   
    }
}

// GroupCard.propTypes = {
//     members: React.PropTypes.array.isRequired,
//     capacity: React.PropTypes.number.isRequired,
//     groupNumber: React.PropTypes.number.isRequired
// }

export default CreateForm;