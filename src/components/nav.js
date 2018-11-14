import React from 'react';

import './nav.css';

export default function Nav(props) {
	return (
		<nav>
			<ul>
				<li>
					<a href="#find-a-pet">Find A Pet</a>
				</li>
				<li>
					<a href="#saved-matches">Saved Matches</a>
				</li>
				<li>
					<a href="#profile">Profile</a>
				</li>
				<li>
					<a 
						href="#logout"
						onClick={() => props.onLogout()}
					>
						Logout
					</a>
				</li>
			</ul>
		</nav>
	);
}