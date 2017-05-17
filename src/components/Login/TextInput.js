import React, { Component } from 'react'
import JQuery from 'jquery';
import {Input,  Button, Form, Header, Card , Menu, Segment} from 'semantic-ui-react'

class TextInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEmpty: true,
			value: "",
			valid: false,
			errorMessage: "Input is invalid",
			errorVisible: false
		};

		this.validation = this.validation.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleChange(e) {
		this.validation(e.target.value);
		this.setState({value: e.target.value});

		if(this.props.onChange) {
			this.props.onChange(e);
		}
	}

	validation(value, valid) {
		if(typeof valid === 'undefined') {
			valid = true;
		}

		let message = "";
		let errorVisible = false;

		if(!valid) {
			message = this.props.errorMessage;
			valid = false;
			errorVisible = true;
		} else if(this.props.required && JQuery.isEmptyObject(value)) {
			message = this.props.emptyMessage;
			valid = false;
			errorVisible = true;
		} else if(value.length < this.props.minCharacters) {
			message = this.props.tooShortMessage;
			valid = false;
			errorVisible = true;
		} else {

		}

		console.log(valid, message, errorVisible)
		this.setState({
			value: value,
		    isEmpty: JQuery.isEmptyObject(value),
		    valid: valid,
		    errorMessage: message,
		    errorVisible: errorVisible
		});
	}

	handleBlur(e) {
		let valid = this.props.validate(e.target.value);
		console.log("Is it valid - ", valid)
		this.validation(e.target.value, valid);
		this.props.setErrorMessage(this.state.errorMessage);
		this.props.visible(this.state.errorVisible);
	}

	render() {
		let styles = {
			marginBottom: 15
		}

		return (
			<div>
				<Form.Field style={styles}>
				<label>{this.props.label}</label>
				<Input
					placeholder={this.props.text}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
					value={this.state.value} />
				</Form.Field>
			</div>
		)
	}
}

export default TextInput