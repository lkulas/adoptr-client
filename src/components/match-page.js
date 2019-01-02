import React from 'react';
import MatchCard from './match-card';
import Nav from './nav';

export default function MatchPage(props) {
	return (
		<div>
			<Nav />
			<main role="main">
				<div className="row">
					<div className="col-12">
						<MatchCard />
					</div>
				</div>
			</main>
		</div>
	);
}