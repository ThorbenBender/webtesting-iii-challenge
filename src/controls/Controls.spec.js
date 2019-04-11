// Test away!
import React from 'react';
import * as rt from 'react-testing-library';
import Control from './Controls';

function setUpWrap(props = {}) {
	rt.cleanup();
	return rt.render(<Control {...props} />);
}

afterEach(rt.cleanup);

describe('Control', () => {
	let wrap;
	beforeEach(() => {
		wrap = setUpWrap();
	});
	it('displays button', () => {
		const button = wrap.queryByTestId(/Button/i);
		expect(button);
		expect(wrap.asFragment()).toMatchSnapshot();
	});
	it('Control', () => {
		const wrapper = rt.render(<Control />);
	});
});
