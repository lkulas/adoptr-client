import React from 'react';
import {connect} from 'react-redux';

import Nav from './nav';
import MatchCard from './match-card';

import './all-matches-page.css';

export function AllMatchesPage(props) {
	const savedMatches = props.savedMatches.map((match, index) => (
		<div key={index}>
			<MatchCard match={match}/>
		</div>
	));

	return (
		<div className="all-matches">
			<Nav />
			<main role="main">
				<section>
					{savedMatches}
				</section>
			</main>
		</div>
	);
}

const mapStateToProps = state => ({
	savedMatches: state.savedMatches
});

export default connect (mapStateToProps)(AllMatchesPage);