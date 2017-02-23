import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import ContactTable from 'ContactTable';

export default class Main extends Component {
	render() {		
		return (
			<MuiThemeProvider>
				<div>
			   		<AppBar title="Jessica Sung" />
			   		{this.props.children}
			   	</div>
		  	</MuiThemeProvider>
		);
	}
}