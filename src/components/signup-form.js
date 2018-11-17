import React from 'react';
import './signup-form.css';

export default function SignupForm(props) {
	return (
		<form className="signup-form">
			<div>
				<label for="username">Email</label>
				<input type="text" name="username" id="username" />
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" name="password" id="password" />
			</div>
			<div>
				<label for="confirm-password">Confirm Password</label>
				<input type="password" name="confirm-password" id="confirm-password" />
			</div>
				<button type='submit'>Sign Up</button>
		</form>
	);
}