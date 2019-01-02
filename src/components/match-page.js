import React from 'react';
import MatchCard from './match-card';
import Rating from './rating';
import Nav from './nav';

export default function MatchPage(props) {
	return (
		<div>
			<Nav />
			<main role="main">
				<div className="row">
					<div className="col-4">
					</div>
					<div className="col-4">
						<MatchCard />
					</div>
					<div className="col-4">
					</div>
				</div>
				<Rating />
			</main>
		</div>
	);
}