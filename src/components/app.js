import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import LandingPage from './landing-page';
import MatchPage from './match-page';
import AllMatchesPage from './all-matches-page';
import ProfilePage from './profile-page';

export default function App(props) {
	return (
		<Router>
			<div>
				<Route 
					exact path="/" 
					component={LandingPage}
				/>
				<Route 
					exact path="/match"
					component={MatchPage} 
				/>
				<Route 
					exact path="/all-matches"
					component={AllMatchesPage} 
				/>
				<Route 
					exact path="/profile"
					component={ProfilePage} 
				/>
			</div>
		</Router>
	);
}