import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

export default class Main extends Component {
	render() {		
		return (
			<MuiThemeProvider>
		   		<h3>Thank you for attending!</h3>
		  	</MuiThemeProvider>
		);
	}
}