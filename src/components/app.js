import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import LandingPage from './landing-page';
import MatchPage from './match-page';
import AllMatchesPage from './all-matches-page';
import ProfilePage from './profile-page';
import DetailPage from './detail-page';
import Footer from './footer';

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
				<Route 
					exact path="/detail/:detailId"
					component={DetailPage} 
				/>
				<Footer />
			</div>
		</Router>
	);
}