import React from 'react';
import {BrowserRouter as Router, Route, Swich, Link} from 'react-router-dom';

import Page1 from '../pages/page1/index';
import Page2 from '../pages/page2/index';

const getRouter = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Page1</Link></li>
				<li><Link to="/page1">Page2</Link></li>
			</ul>
			<Route exact path="" component={Page1}/>
			<Route path="/page1" component={Page2}/>
		</div>
	</Router>
 );

 export default getRouter;