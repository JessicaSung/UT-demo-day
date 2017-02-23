import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import ContactTable from 'ContactTable';
import Main from 'Main';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={ContactTable} />
		</Route>
	</Router>
), document.getElementById('app'));