import { testState } from '../store/test';

function test(state = testState, action) {
	switch(action.type) {
		case 'TEST1':
			return Object.assign({}, state, action.payload);
		case 'TEST2':
			return state + action.payload;
		default:
			return state;
	}
}
export default test;