import React, { Component } from 'react'
import JQuery from 'jquery';
import {Input,  Button, Form, Header, Card , Menu, Segment} from 'semantic-ui-react'

class TextInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEmpty: true,
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
		this.props.releaseLock(this.props.lid);

		if(!valid) {
			message = this.props.errorMessage;
			valid = false;
			errorVisible = true;
			this.props.setLock(this.props.lid);
		} else if(this.props.required && JQuery.isEmptyObject(value)) {
			message = this.props.emptyMessage;
			valid = false;
			errorVisible = true;
			this.props.setLock(this.props.lid);
		} else if(value.length < this.props.minCharacters) {
			message = this.props.tooShortMessage;
			valid = false;
			errorVisible = true;
			this.props.setLock(this.props.lid);
		} else {

		}
		errorVisible = false;
		this.setState({
		    isEmpty: JQuery.isEmptyObject(value),
		    valid: valid,
		    errorMessage: message,
		    errorVisible: errorVisible
		}, () => {
			this.props.visible(this.state.errorVisible); // place functions in setState callback to make sure updates parent correctly
			this.props.setErrorMessage(this.state.errorMessage);
		});
	}

	handleBlur(e) {
		let valid = this.props.validate(e.target.value);
		this.validation(e.target.value, valid);
		// this.props.visible(this.state.errorVisible); // place functions in setState callback to make sure updates parent correctly
		// this.props.setErrorMessage(this.state.errorMessage);
		if(this.props.onChange) {
			this.props.onChange(e);
		}
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
					value={this.props.value}
					type={this.props.type} />
				</Form.Field>
			</div>
		)
	}
}

export default TextInput