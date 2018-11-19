import React from 'react';
import './signup-form.css';

export default function SignupForm(props) {
	return (
		<form id="signup-form">
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