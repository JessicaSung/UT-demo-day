import React, { Component } from 'react';
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
	}

	handleInputChange(event) {
		const newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}

	render() {
		console.log(this.state);	
		return (
			<Table selectable={ false }>
				<TableBody displayRowCheckbox={ false }>
					<TableRow>
						<TableRowColumn>
							<TextField
								name="name"
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
								name="email"
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
								name="linkedin"
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
								label="Submit" 
								primary={true} 
								style={style}/>
						</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		);
	}
}