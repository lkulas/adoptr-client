import React from 'react';

import LoginForm from './login-form';

export default class LoginSection extends React.Component {
	constructor() {
		super();
		this.state = {
			formIsHidden: true,
			buttonIsHidden: false
		};
	}

	toggleHidden() {
		this.setState({
			formIsHidden: !this.state.formIsHidden,
			buttonIsHidden: !this.state.buttonIsHidden
		});
	}

	render() {
		return (
			<div className="login-section">
				{!this.state.buttonIsHidden && <button onClick={this.toggleHidden.bind(this)}>
					Login
				</button>}
				{!this.state.formIsHidden && <LoginForm />}
			</div>
		);
	}
}