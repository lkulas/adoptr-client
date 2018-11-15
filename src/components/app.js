import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Nav from './nav';
import LoginNav from './login-nav';
import HeroSection from './hero-section';
import InfoSection from './info-section';
import SignupSection from './signup-section';
import MatchSection from './match-section';
import AllMatchesSection from './all-matches-section';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	logout() {
		console.log('User logged out');
	}

	render() {
		return (
			<Router>
				<div>
					<Route 
						path={["/all-matches", "/match", "/profile"]}
						component={Nav}
					/>
					<Route 
							exact path="/match"
							component={MatchSection} />
					<Route 
							exact path="/all-matches"
							component={AllMatchesSection} />
					<Route 
						exact path="/" 
						component={LoginNav}
					/>
					<main role="main">
						<Route 
							exact path="/"
							component={HeroSection} />
						<Route 
							exact path="/"
							component={InfoSection} />
						<Route 
							exact path="/"
							component={SignupSection} />
					</main>
				</div>
			</Router>
		);
	}
}