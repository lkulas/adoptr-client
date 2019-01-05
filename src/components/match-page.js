import React from 'react';
import MatchCard from './match-card';
import Nav from './nav';

export default function MatchPage(props) {
	return (
		<div>
			<Nav />
			<main>
				<MatchCard />
			</main>
		</div>
	);
}