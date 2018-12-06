import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav';
import {normalizeSize, normalizeHealth, normalizeGender} from '../normalizeTargets';
import './detail-page.css';

export function DetailPage(props) {
	const {params} = props.match;
	const targetPet = props.savedMatches.find(function(element) {
  	return element.id === params.detailId;
	});
	const {
		photo, 
		name, 
		sex, 
		age, 
		breeds, 
		contact, 
		size, 
		options, 
		description
	} = targetPet;

	const health = options.map((pet, index) => {
		return (
			<li key={index}>{normalizeHealth(pet)}</li>
		);
	});

	console.log(targetPet);

	return (
		<div className="detail-page">
			<Nav />
			<main role="main">
				<section>
					<h1>{name}</h1>
					<img alt="" src={photo} />
					<p>
						<span className="breed">{breeds[0]}</span> • 
						<span className="city"> {contact.city}</span>,
						<span className="state"> {contact.state}</span>
					</p>
					<p>
						<span className="age">{age}</span> •
						<span className="gender"> {normalizeGender(sex)}</span> •
						<span className="size"> {normalizeSize(size)}</span>
					</p>
					<h2>About</h2>
						<ul>
							{health}
						</ul>
					<h2>Meet {name}</h2>
						<p>{description}</p>
					<h2>Shelter</h2>
						<ul>
							<li className="shelter-name">{contact.name}</li>
							<li className="shelter-address">{contact.address1} {contact.address2}</li>
							<li className="shelter-city-state">{contact.city}, {contact.state} {contact.zip}</li>
							<li className="shelter-phone">{contact.phone}</li>
							<li className="shelter-email">{contact.email}</li>
						</ul>
				</section>
			</main>
		</div>
	);
}


const mapStateToProps = state => ({
	savedMatches: state.adoptr.savedMatches
});

export default connect (mapStateToProps)(DetailPage);