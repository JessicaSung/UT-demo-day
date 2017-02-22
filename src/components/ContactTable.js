import React, { Component } from 'react';
import axios from 'axios';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 20,
};

export default class ContactTable extends Component {
	constructor(props) {
    	super(props);

    	this.state = {
    		name: '',
    		email: '',
    		linkedin: ''
    	};
    	this.handleInputChange = this.handleInputChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}

	handleSubmit(event) {
		event.preventDefault();

		axios.post('/api/contact/save', {
			name: this.state.name,
			email: this.state.email,
			linkedin: this.state.linkedin
		}).then((response) => {
			console.log('Successfully saved to database.');
		}).catch(function(err) {
			console.error(err);
		});

		this.setState({ name: '', email: '', linkedin: '' });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Table selectable={ false }>
					<TableBody displayRowCheckbox={ false }>
						<TableRow>
							<TableRowColumn>
								<TextField
									id="name"
									floatingLabelText="Name"
									hintText="First Last"
									value={this.state.name}
									onChange={this.handleInputChange}
								/>
							</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>
								<TextField
									id="email"
									floatingLabelText="Email Address"
									hintText="example@me.com"
									value={this.state.email}
									onChange={this.handleInputChange}
								/>
							</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>
								<TextField
									id="linkedin"
									floatingLabelText="LinkedIn URL"
									hintText="(optional)"
									value={this.state.linkedin}
									onChange={this.handleInputChange}
								/>
							</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>
								<RaisedButton 
									type="submit"
									label="Submit"	
									primary={true} 
									style={style}/>
							</TableRowColumn>
						</TableRow>
					</TableBody>
				</Table>
			</form>
		);
	}
}