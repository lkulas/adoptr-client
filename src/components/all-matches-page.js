import React from 'react';

import Nav from './nav';
import MatchCard from './match-card';

import './all-matches-page.css';

export default function AllMatchesPage(props) {
	return (
		<div className="all-matches">
			<Nav />
			<main role="main">
				<section>
					<MatchCard />
					<MatchCard />
					<MatchCard />
				</section>
			</main>
		</div>
	);
}