import React from 'react';

import LoginForm from './login-form';
import './login-section.css';

export default class LoginSection extends React.Component {
	constructor() {
		super();
		this.state = {
			isHidden: true
		};
	}

	toggleHidden() {
		this.setState({
			isHidden: !this.state.isHidden
		});
	}

	render() {
		return (
			<div className="login-section">
				<button className="login-button" onClick={this.toggleHidden.bind(this)}>
					Login
				</button>
				{!this.state.isHidden && <LoginForm />}
			</div>
		);
	}
}