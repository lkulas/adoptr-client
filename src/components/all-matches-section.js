import React from 'react';
import MatchCard from './match-card';

export default function AllMatchesSection(props) {
	return (
		<section>
			<MatchCard />
			<MatchCard />
			<MatchCard />
		</section>
	);
}