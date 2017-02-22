import React, { Component } from 'react';
import axios from 'axios';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

export default class ContactTable extends Component {
	constructor(props) {
    	super(props);

    	this.state = {
    		name: '',
    		email: '',
    		linkedin: '',
    		open: false
    	};
    	this.handleInputChange = this.handleInputChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleRequestClose = this.handleRequestClose.bind(this);
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
			console.log('Saved successfully to database.');
			this.setState({ open: true });
		}).catch(function(err) {
			console.error(err);
		});

		// this.setState({  });
	}

	handleRequestClose() {
	    this.setState({ open: false, name: '', email: '', linkedin: '' });
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
									<br />	
								<TextField
									id="email"
									floatingLabelText="Email Address"
									hintText="example@me.com"
									value={this.state.email}
									onChange={this.handleInputChange}
								/>
									<br />
								<TextField
									id="linkedin"
									floatingLabelText="LinkedIn URL"
									hintText="(optional)"
									value={this.state.linkedin}
									onChange={this.handleInputChange}
								/>
									<br /> <br />
								<RaisedButton 
									type="submit"
									label="Submit"	
									primary={true} 
								/>
								<Snackbar
									open={this.state.open}
									message={"Thanks for stopping by, " + this.state.name + "!"}
									autoHideDuration={4000}
									onRequestClose={this.handleRequestClose}
								/>
							</TableRowColumn>
						</TableRow>
					</TableBody>
				</Table>
			</form>
		);
	}
}