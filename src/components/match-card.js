import React from 'react';

import './match-card.css';

export default function MatchCard(props) {
	const {photo, name, sex, age, breeds} = props.match;
	const breed = breeds.map((breed, index) => (
		<li key={index}>
			{breed} 
		</li>
	));

	return (
		<div className="card">
			<img alt="" src={photo} />
			<p>
				<span className="name">{name}</span> (<span className="gender">{sex}</span>), <span className="age">{age}</span>
			</p>
			<div className="breed">
				<ul>{breed}</ul>
			</div>
			<ul>
				<li>Good with children</li>
				<li>Not good with other dogs</li>
				<li>Housebroken</li>
			</ul>
		</div>
	);
}