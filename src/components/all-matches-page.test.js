import React from 'react';
import {shallow, mount} from 'enzyme';
import store from '../store';
import {Provider} from 'react-redux';

import {AllMatchesPage} from './all-matches-page';

describe('<AllMatchesPage />', () => {
	it('Renders without crashing', () => {
		shallow(
			<Provider store={store}>
				<AllMatchesPage />
			</Provider>);
	});
});