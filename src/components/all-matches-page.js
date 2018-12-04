import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav';
import SavedMatchCard from './saved-match-card';

import './all-matches-page.css';

export function AllMatchesPage(props) {
	const savedMatches = props.savedMatches.map((match, index) => (
		<div key={index} className="col-3">
			<SavedMatchCard match={match}/>
		</div>
	));

	return (
		<div className="all-matches">
			<Nav />
			<main role="main">
				<div className="row">
					{savedMatches}
				</div>
			</main>
		</div>
	);
}

const mapStateToProps = state => ({
	savedMatches: state.adoptr.savedMatches
});

export default connect (mapStateToProps)(AllMatchesPage);