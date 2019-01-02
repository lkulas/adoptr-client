import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './landing-page';
import MatchPage from './match-page';
import AllMatchesPage from './all-matches-page';
import DetailPage from './detail-page';
import Footer from './footer';


export default function App(props) {
	return (
		<div>
			<Switch>
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
					exact path="/detail/:detailId"
					component={DetailPage} 
				/>
				<Footer />
			</Switch>
		</div>
	);
}