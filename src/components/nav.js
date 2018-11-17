import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

export default function Nav(props) {
	return (
		<nav>
			<ul>
					<Link to="/match">
						<li>Find A Pet</li>
					</Link>
					<Link to="/">
						<li>Logout</li>
					</Link>
					<Link to="/profile">
						<li>Profile</li>
					</Link>
					<Link to="/all-matches">
						<li>Saved Matches</li>
					</Link>
			</ul>
		</nav>
	);
}