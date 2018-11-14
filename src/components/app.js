import React from 'react';

import Nav from './nav';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	logout() {
		console.log('User logged out');
	}

	render() {
		return (
			<div>
				<Nav 
					onLogout={() => this.logout()}
				/>
			</div>
		);
	}
}