import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import MatchCard from './match-card';
import Rating from './rating';
import Nav from './nav';

export function MatchPage(props) {
	if (props.preferences === null) {
		return <Redirect to="/profile" />;
	}
	return (
		<div>
			<Nav />
			<main role="main">
				<div class="row">
					<div class="col-4">
					</div>
					<div class="col-4">
						<MatchCard />
					</div>
					<div class="col-4">
					</div>
				</div>
				<Rating />
			</main>
		</div>
	);
}

const mapStateToProps = state => ({
	preferences: state.preferences
});

export default connect(mapStateToProps)(MatchPage);