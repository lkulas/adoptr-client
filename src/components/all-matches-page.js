import React from 'react';

import Nav from './nav';
import MatchCard from './match-card';

import './all-matches-page.css';

export default function AllMatchesPage(props) {
	return (
		<div>
			<Nav />
			<main role="main">
				<section className="all-matches">
					<MatchCard />
					<MatchCard />
					<MatchCard />
				</section>
			</main>
		</div>
	);
}