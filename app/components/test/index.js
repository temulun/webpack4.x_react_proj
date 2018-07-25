import React, { Component } from "react";
import '../../less/test/index.less';
import '../../sass/test/index.scss';
import './test_css.css';


class Test extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				div背景图是 css 引入 gif
				<p>这是P标签less</p>
				<br />
				<b>这是b标签sass!</b>
				<br />
			</div>
		);
	}
}

module.exports = Test;