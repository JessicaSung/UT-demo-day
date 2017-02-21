import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>
), document.getElementById('root'));