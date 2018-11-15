import React from 'react';
import SignupForm from './signup-form';

export default function SignupSection(props) {
	return (
		<div>
			<section>
				<header>
					<h3>Get Started</h3>
				</header>
				<SignupForm />
			</section>
		</div>
	);
}