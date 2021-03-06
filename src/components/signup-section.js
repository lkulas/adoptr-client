import React from 'react';
import RegistrationForm from './registration-form';

export default function SignupSection(props) {
	return (
		<div className="signup-section">
			<section>
				<header>
					<h3>Get Started</h3>
				</header>
				<RegistrationForm />
			</section>
		</div>
	);
}