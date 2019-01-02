import React from 'react';
import {PETFINDER_API_KEY} from '../config';
import {connect} from 'react-redux';
import './match-card.css';
import $ from 'jquery';
import {normalizeGenderResponse, normalizeSizeResponse} from '../normalizeResponses';
import {postAdoptr, updateCurrentPet} from '../actions/adoptr';
import store from '../store';

export class MatchCard extends React.Component {

	onSubmit() {
		const data = store.getState().adoptr.currentPet;
		return store.dispatch(postAdoptr(data));
	}

  render() {
  	return (
  		<div className="card">
				<img alt="" src={this.props.pet.photo} className="photo" />
				<h1 className="name">{this.props.pet.name}</h1>
				<h2 className="breed">{this.props.pet.breed}</h2>
				<ul>
					<li>
						<span className="animal">{this.props.pet.animal}</span>
					</li>
					<li>
						<span className="age">Age: {this.props.pet.age}</span>
					</li>
					<li>
						<span className="gender">Gender: {this.props.pet.sex}</span>
					</li>
					<li>
						<span className="size">Size: {this.props.pet.size}</span>
					</li>
				</ul>
				<div className="rating">
					<a href="/match">
						<button type="button" id="x-btn">X</button>
					</a>
					<button 
						type="button" 
						id="heart-btn"
						onClick={this.onSubmit}>
						Heart
					</button>
				</div>
			</div>
  	);
  }

  componentDidMount() {
		$.getJSON(`http://api.petfinder.com/pet.getRandom?key=${PETFINDER_API_KEY}&format=json&output=full&callback=?`)
	  	.then(data => {
	  		const pet = data.petfinder.pet;
	  		console.log(pet);
	  		const newCurrentPet = {
	  			username: localStorage.getItem('username'),
  				animal: pet.animal.$t || null,
  				photo: pet.media.photos.photo[2].$t || null,
  				name: pet.name.$t || null,
  				age: pet.age.$t || null,
  				sex: normalizeGenderResponse(pet.sex.$t) || null,
  				breed: pet.breeds.breed.$t || pet.breeds.breed[0].$t || null,
  				size: normalizeSizeResponse(pet.size.$t) || null,
  				contact: {
  					phone: pet.contact.phone.$t || null,
  					email: pet.contact.email.$t || null,
  					address1: pet.contact.address1.$t || null,
  					address2: pet.contact.address2.$t || null,
  					city: pet.contact.city.$t || null,
  					state: pet.contact.state.$t || null,
  					zip: pet.contact.zip.$t || null,
  				},
  				description: pet.description.$t || null
	  		};
	  		store.dispatch(updateCurrentPet(newCurrentPet));
	  	})
	  	.catch(err => console.log(err))
  }
}

const mapStateToProps = state => ({
	pet: store.getState().adoptr.currentPet
})

export default connect (mapStateToProps)(MatchCard);
