import React from 'react';
import {connect} from 'react-redux';

import MatchCard from './match-card';
import Rating from './rating';
import Nav from './nav';

export function MatchPage(props) {
	return (
		<div>
			<Nav />
			<main role="main">
				<MatchCard match={props.match}/>
				<Rating />
			</main>
		</div>
	);
}

const mapStateToProps = state => ({
	match: state.match
});

export default connect (mapStateToProps)(MatchPage);