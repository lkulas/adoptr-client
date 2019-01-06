import React from 'react';
import store from '../store';
import {deleteAdoptr} from '../actions/adoptr';
const xIcon = require('../images/x-icon.png');

export default class SavedMatchCard extends React.Component {
	
	onDelete(id) {
		return store.dispatch(deleteAdoptr(id))
		.then(window.location.reload(true));
	}

	render() {
		const {photo, name, sex, size, age, breed, id} = this.props.match;
		return (
			<div className="card">
				<img alt="dog" src={photo} className="photo" />
				<h1 className="name blue bold">{name}</h1>
				<h2 className="breed">{breed}</h2>
				<ul>
					<li>
						<span className="blue bold">Age: </span><span className="age">{age}</span>
					</li>
					<li>
						<span className="blue bold">Gender: </span><span className="gender">{sex}</span>
					</li>
					<li>
						<span className="blue bold">Size: </span><span className="size">{size}</span>
					</li>
				</ul>
				<img src={xIcon} className="icon" alt="X icon, click to delete" onClick={() => this.onDelete(id)}/>
			</div>
		);
	}
}