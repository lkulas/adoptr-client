import React from 'react';
import {Route,Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {refreshAuthToken} from '../actions/auth';

import LandingPage from './landing-page';
import MatchPage from './match-page';
import AllMatchesPage from './all-matches-page';
import ProfilePage from './profile-page';
import DetailPage from './detail-page';
import Footer from './footer';


export class App extends React.Component {
	componentDidUpdate(prevProps) {
		if (!prevProps.loggedIn && this.props.loggedIn) {
			this.startPeriodicRefresh();
		} else if (prevProps.loggedIn && !this.props.loggedIn) {
			this.stopPeriodicRefresh();
		}
	}

		componentWillUnmount() {
			this.stopPeriodicRefresh();
		}

		startPeriodicRefresh() {
			this.refreshInterval = setInterval(
				() => this.props.dispatch(refreshAuthToken()),
				60 * 60 * 1000
			);
		}

		stopPeriodicRefresh() {
			if (!this.refreshInterval) {
				return;
			}
			clearInterval(this.refreshInterval);
		}

	render() {
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
						exact path="/profile"
						component={ProfilePage} 
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
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));