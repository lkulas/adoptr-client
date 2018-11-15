import React from 'react';
import MatchCard from './match-card';
import Rating from './rating';

export default function MatchSection(props) {
	return (
		<section>
			<MatchCard />
			<Rating />
		</section>
	);
}