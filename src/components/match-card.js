import React from 'react';
import {connect} from 'react-redux';
import {normalizeSize, normalizeHealth, normalizeGender} from '../normalizeTargets';

import './match-card.css';

export function MatchCard(props) {
	const {photo, name, sex, age, breeds, size, options} = props.match;

	const health = options.map((pet, index) => {
		return (
			<li key={index}>{normalizeHealth(pet)}</li>
		);
	});

	return (
		<div className="card">
			<img alt="" src={photo} />
			<p>
				<h1 className="name">{name}</h1>
				<span className="age">{age}</span>
				<span className="gender"> {normalizeGender(sex)}</span>
			</p>
			<div className="breed">
				<ul>{breeds[0]}</ul>
			</div>
			<ul>
				<li className="size">{normalizeSize(size)}</li>
				{health}
			</ul>
		</div>
	);
}

const mapStateToProps = state => ({
	match: state.adoptr.match
});

export default connect (mapStateToProps)(MatchCard);