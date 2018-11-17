import React from 'react';

import LoginSection from './login-section';
import HeroSection from './hero-section';
import InfoSection from './info-section';
import SignupSection from './signup-section';

export default function LandingPage(props) {
	return (
		<div>
			<LoginSection />
			<main role="main">
				<HeroSection />
				<InfoSection />
				<SignupSection />
			</main>
		</div>
	);
}