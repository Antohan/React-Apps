import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class InputForm extends Component {
	state = { text: '' }

	handleInput = (e) => {
		this.setState({ text: e.target.value });
	}
	
	handleSearch = (e) => {
		e.preventDefault();
		this.props.onSearchCity(this.state.text);
		this.setState({ text: '' })
	}

	render() {
		return (
			<Form inline>
				<FormGroup>
					<FormControl
							type="text"
							placeholder="City"
							value={this.state.text}
							onChange={this.handleInput}
					/>
					<Button onClick={this.handleSearch}>Search</Button>
				</FormGroup>
			</Form>
		);
	}
}

export default InputForm;