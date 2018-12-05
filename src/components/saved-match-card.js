import React from 'react';
import {Link} from 'react-router-dom';

import './match-card.css';

export default function SavedMatchCard(props) {
	const {photo, name, sex, age, breeds, id} = props.match;
	const idUrl = `/detail/${id}`;

	return (
		<div className="card col-4">
			<div className="photo">
				<img alt="" src={photo} />
			</div>
			<p>
				<span className="name">
					<Link to={idUrl}>
						{name}
					</Link>
				</span> (<span className="gender">{sex}</span>), 
				<span className="age"> {age}</span>
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