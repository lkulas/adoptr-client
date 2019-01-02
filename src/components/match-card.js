import React from 'react';
import {PETFINDER_API_KEY} from '../config';
import './match-card.css';
import $ from 'jquery';
import {normalizeGenderResponse, normalizeSizeResponse} from '../normalizeResponses';

export default class MatchCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPet: {
				photo: null,
				name: null,
				age: null,
				sex: null,
				breed: null,
				size: null
			}
		}
	}

  render() {
  	return (
  		<div className="card">
			<img alt="" src={this.state.currentPet.photo} />
			<h1 className="name">{this.state.currentPet.name}</h1>
			<p>
				<span className="age">{this.state.currentPet.age}</span>
				<span className="gender"> {this.state.currentPet.sex}</span>
			</p>
			<div className="breed">
				<ul>{this.state.currentPet.breed}</ul>
			</div>
			<ul>
				<li className="size">Size: {this.state.currentPet.size}</li>
			</ul>
		</div>
  	);
  }

  componentDidMount() {
		$.getJSON(`http://api.petfinder.com/pet.getRandom?key=${PETFINDER_API_KEY}&format=json&output=full&callback=?`)
	  	.then(data => {
	  		console.log(data.petfinder.pet);
	  		const pet = data.petfinder.pet;
	  		this.setState({
	  			currentPet: {
	  				photo: pet.media.photos.photo[2].$t,
	  				name: pet.name.$t,
	  				age: pet.age.$t,
	  				sex: normalizeGenderResponse(pet.sex.$t),
	  				breed: pet.breeds.breed.$t || pet.breeds.breed[0].$t,
	  				size: normalizeSizeResponse(pet.size.$t)
	  			} 
	  		});
	  	})
	  	.catch(err => console.log(err))
  }
}

