import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import HeroSection from './hero-section';
import InfoSection from './info-section';
import SignupSection from './signup-section';

export function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/match" />;
	}
	return (
		<div>
			<main role="main">
				<HeroSection />
				<InfoSection />
				<SignupSection />
			</main>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);