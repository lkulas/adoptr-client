import React from 'react';
import {PETFINDER_API_KEY} from '../config';
import './match-card.css';
import $ from 'jquery';

export default class MatchCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPet: {
				media: {
					photos: {
						photo: [
							{},
							{},
							{}
						]
					}
				},
				name: {},
				age: {},
				sex: {},
				breeds: {
					breed: {}
				},
				size: {},
				options: {
					option: [
						{}
					]
				}
			}
		}
	}

  render() {
  	const health = this.state.currentPet.options.option.map((option, index) => {
			return (
				<li key={index}>{option.$t}</li>
			);
		});

  	return (
  		<div className="card">
			<img alt="" src={this.state.currentPet.media.photos.photo[2].$t} />
			<p>
				<h1 className="name">{this.state.currentPet.name.$t}</h1>
				<span className="age">{this.state.currentPet.age.$t}</span>
				<span className="gender"> {this.state.currentPet.sex.$t}</span>
			</p>
			<div className="breed">
				<ul>{this.state.currentPet.breeds.breed.$t}</ul>
			</div>
			<ul>
				<li className="size">{this.state.currentPet.size.$t}</li>
				{health}
			</ul>
		</div>
  	);
  }

  componentDidMount() {
		$.getJSON(`http://api.petfinder.com/pet.getRandom?key=${PETFINDER_API_KEY}&format=json&output=full&callback=?`)
	  	.then(data => {
	  		console.log(data.petfinder.pet);
	  		const currentPet = data.petfinder.pet;
	  		this.setState({currentPet});
	  	})
	  	.catch(err => console.log(err))
  }
}

