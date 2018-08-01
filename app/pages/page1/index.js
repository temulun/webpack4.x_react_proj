import React, {Component} from 'react';
import { connect } from 'react-redux';
import hoc from '../../components/test/index';

function testAsync (payload) {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: 'TEST1', payload })
    }, 2000)
  }
}


class Page1 extends Component {
	constructor(props) {
		super(props);
	}
	componentDidUpdate() {
    	console.log(this.props.test)
	}
	render() {
		return (
			<div>
    			<button onClick={ () => { this.props.dispatch(testAsync({test1: '我被点击了~'}) ) } } >点击  {this.props.test.test1}</button>
				  <div>This is page1.</div>
          <AA auth="1"/>
			</div>
		)
	}
}

const AA = hoc( 
  (defProps) => { 
    console.log(defProps); 
    if(defProps.auth === "0") {
      return <button>这是有权限的按钮{defProps.num}</button>
    } else {
      return <button>这是没有权限的按钮{defProps.num}</button>
    }
    
  } 
);

let mapStateToProps = (state) => {
  let { test } = state;
  return { test };
};

export default connect(mapStateToProps)(Page1);