import React from 'react';
import {Link} from 'react-router-dom';

import './match-card.css';

export default function SavedMatchCard(props) {
	const {photo, name, sex, age, breeds, id} = props.match;
	const breedList = breeds.map((breed, index) => (
		<li key={index}>
			{breed} 
		</li>
	));
	const idUrl = `/detail/${id}`;

	return (
		<div className="card col-4">
			<img alt="" src={photo} />
			<p>
				<span className="name">
					<Link to={idUrl}>
						{name}
					</Link>
				</span> 
				(
				<span className="gender">
					{sex}
				</span>
				), 
				<span className="age">
					{age}
				</span>
			</p>
			<div className="breed">
				<ul>{breedList}</ul>
			</div>
			<ul>
				<li>Good with children</li>
				<li>Not good with other dogs</li>
				<li>Housebroken</li>
			</ul>
		</div>
	);
}