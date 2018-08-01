import React, { Component } from "react";
import '../../less/test/index.less';
import '../../sass/test/index.scss';
import './test_css.css';

export default function hoc(Co) {
	// body...
	return class Test1 extends Component {
		constructor(props) {
			super(props);
			this.state={num:0}
		}
		render() {
			return (
				<div>
					<p>	
						<i>这是高阶组件</i>
						<Co {...this.props} { ...this.state } />
					</p>
				</div>
			);
		}
	}
}


class Test extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props)
		return (
			<div>
				<p>这是P标签less</p>
				<br />
				<b>这是b标签sass!</b>
				<br />
				<em>这是B标签 css 带背景图gif</em>
				<br />
			</div>
		);
	}
}
