import React from 'react';
import './login-form.css';

export default function LoginForm(props) {
	return (
		<form className="login-form">
			<div>
				<label for="username">Email</label>
				<input type="text" name="username" id="username" />
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" name="password" id="password" />
			</div>
				<button type='submit'>Submit</button>
		</form>
	);
}