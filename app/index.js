import React from "react";
import ReactDom from "react-dom";
// import Test from './components/test/index';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './model/reducers/reducers'
import { Provider } from 'react-redux'

import Root from './router/route.js';
import './less/reset.less';

const store = createStore(reducers, applyMiddleware(thunk));

console.log(store.getState());

function testMidd() {
	// body...
	// console.log();
	return (next) => {
			// console.log(next)
		// (action) => {
			// return next(action);
		// }
	}
}


ReactDom.render(
    <Provider store={store}>
    	<Root />
  	</Provider>,
    document.getElementById("root")
);