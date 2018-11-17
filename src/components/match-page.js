import React from 'react';

import MatchCard from './match-card';
import Rating from './rating';
import Nav from './nav';

export default function MatchPage(props) {
	return (
		<div>
			<Nav />
			<main role="main">
				<MatchCard />
				<Rating />
			</main>
		</div>
	);
}