import React from 'react';

import LoginNav from './login-nav';
import LoginForm from './login-form';
import HeroSection from './hero-section';
import InfoSection from './info-section';
import SignupSection from './signup-section';

export default function LandingPage(props) {
	return (
		<div>
			<LoginNav />
			<LoginForm />
			<main role="main">
				<HeroSection />
				<InfoSection />
				<SignupSection />
			</main>
		</div>
	);
}