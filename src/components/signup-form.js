import React from 'react';
import './signup-form.css';

export default function SignupForm(props) {
	return (
		<form class='signup-form'>
			<div>
				<label for="first-name">First name</label>
				<input placeholder='First Name' type="text" name='first-name' id='first-name' />
			</div>
			<div>
				<label for="last-name">Last name</label>
				<input type="text" name='last-name' id='last-name' placeholder='Last Name' />
			</div>
			<div>
				<label for="username">Email</label>
				<input type="text" name='username' id='username' />
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" name='password' id='password' />
			</div>
				<button type='submit'>Sign Up</button>
		</form>
	);
}