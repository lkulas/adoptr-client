import React from 'react';
import LoginSection from './login-section';

export default function HeroSection(props) {
	return (
		<div className="hero-section row">
			<LoginSection />
			<header>
				<h1><span className="logo-font">Adoptr</span></h1>
				<h2>Find your next best friend</h2>
			</header>
		</div>
	);
}