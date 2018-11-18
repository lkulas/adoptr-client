import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default function Nav(props) {
	return (
				<nav>
					<ul>
						<li>
							<Link to="/match">
								Find A Pet
							</Link>
						</li>
						<li>
							<Link to="/">
								Logout
							</Link>
						</li>
						<li>
							<Link to="/profile">
								Profile
							</Link>
						</li>
						<li>
							<Link to="/all-matches">
								Saved Matches
							</Link>
						</li>
					</ul>
				</nav>
	);
}