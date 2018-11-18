import React from 'react';
import './signup-form.css';

export default class SignupForm extends React.Component {
	constructor(props) {
		super(props);
	}

	goToProfile(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form id="signup-form" onSubmit={e => this.goToProfile(e)}>
				<div>
					<label htmlFor="username">Email</label>
					<input type="text" name="username" id="username" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
				</div>
				<div>
					<label htmlFor="confirm-password">Confirm Password</label>
					<input type="password" name="confirm-password" id="confirm-password" />
				</div>
					<button type='submit'>Sign Up</button>
			</form>
		);
	}
}