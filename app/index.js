import React from "react";
import ReactDom from "react-dom";
// import Test from './components/test/index';

import Root from './router/route.js';
import './less/reset.less';


ReactDom.render(
    <Root />,
    document.getElementById("root")
);