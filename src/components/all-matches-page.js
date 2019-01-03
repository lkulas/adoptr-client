import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav';
import SavedMatchCard from './saved-match-card';
import store from '../store';
import {getAdoptr} from '../actions/adoptr';

export default function AllMatchesPage(props) {
	return (
		<div className="all-matches">
			<Nav />
			<main role="main">
				<div className="row">
					<h1>Coming Soon</h1>
				</div>
			</main>
		</div>
	);
}