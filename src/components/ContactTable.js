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
    		contact: []
    	};
	}

	render() {		
		return (
			<Table selectable={ false }>
				<TableBody displayRowCheckbox={ false }>
					<TableRow>
						<TableRowColumn>
							<TextField
								name="name"
								hintText="First Last"
								floatingLabelText="Name"
							/>
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>
							<TextField
								name="email"
								hintText="example@me.com"
								floatingLabelText="Email Address"
							/>
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>
							<TextField
								name="linkedin"
								hintText="(optional)"
								floatingLabelText="LinkedIn URL"
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