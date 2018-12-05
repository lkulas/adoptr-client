import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './match-card.css';

export function MatchCard(props) {
	const {photo, name, sex, age, breeds, id} = props.match;
	const idUrl = `/detail/${id}`;

	return (
		<div className="card">
			<img alt="" src={photo} />
			<p>
				<span className="name">
					{name}
				</span> (<span className="gender">{sex}</span>), <span className="age">{age}</span>
			</p>
			<div className="breed">
				<ul>{breeds[0]}</ul>
			</div>
			<ul>
				<li>Good with children</li>
				<li>Not good with other dogs</li>
				<li>Housebroken</li>
			</ul>
		</div>
	);
}

const mapStateToProps = state => ({
	match: state.adoptr.match
});

export default connect (mapStateToProps)(MatchCard);