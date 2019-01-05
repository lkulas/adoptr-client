import React from 'react';
import {Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import store from '../store';

export default class Nav extends React.Component {
	logOut() {
		return store.dispatch(clearAuth())
		.then(clearAuthToken())
		.catch(err => console.log(err));
	}

	render() {
		return (
			<nav>
			<Link to="/">
				<h1 className="logo-font white medium">Adoptr</h1>
			</Link>
				<ul>
					<li>
						<Link to="/match">Find A Dog</Link>
					</li>
					<li>
						<Link to="/all-matches">Saved Matches</Link>
					</li>
					<li>
						<Link 
						to="/"
						onClick={this.logOut}
						>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}