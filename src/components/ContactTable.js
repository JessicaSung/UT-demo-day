import React, { Component } from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';

const styles = {
	floatingLabelFocusStyle: {
        color: '#BF5700'
    }
}

export default class ContactTable extends Component {
	constructor(props) {
    	super(props);

    	this.state = {
    		showCheckboxes: false
    	};
	}

	render() {		
		return (
			<Table>
				<TableBody displayRowCheckbox={this.state.showCheckboxes}>
					<TableRow>
						<TableRowColumn>
							<TextField
								hintText="First Last"
								floatingLabelText="Name"
								floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
							/>
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>
							<TextField
								hintText="example@me.com"
								floatingLabelText="Email Address"
							/>
						</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>
							<TextField
								hintText="(optional)"
								floatingLabelText="LinkedIn URL"
							/>
						</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		);
	}
}