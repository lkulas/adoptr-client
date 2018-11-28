import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './match-card.css';

export function SavedMatchCard(props) {
	const {photo, name, sex, age, breeds, id} = props;
	const breed = breeds.map((breed, index) => (
		<li key={index}>
			{breed} 
		</li>
	));
	const idUrl = `/detail/${id}`;

	return (
		<div className="card">
			<img alt="" src={photo} />
			<p>
				<span className="name">
					<Link to={idUrl}>
						{name}
					</Link>
				</span> 
				(<span className="gender">
					{sex}
				</span>), 
				<span className="age">
					{age}
				</span>
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

const mapStateToProps = state => ({
	savedMatches: state.adoptr.savedMatches
});

export default connect (mapStateToProps)(SavedMatchCard);