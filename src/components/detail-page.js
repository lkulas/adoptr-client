import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav';
import store from '../store';
import {getAdoptr} from '../actions/adoptr';

export class DetailPage extends React.Component {
	componentDidMount() {
		this.props.dispatch(getAdoptr());
	}

	render() {
		if (this.props.savedPets.length === 0) {
			return (
				<div className="detail=page">
					<Nav />
					<main>
					</main>
				</div>
			);
		} else {
			const {params} = this.props.match;
			console.log(params);
			console.log(this.props);
			const targetPet = this.props.savedPets.find(a => a.id === params.detailId);
			console.log(targetPet);
			const {
				photo, 
				name, 
				sex, 
				age, 
				breed, 
				city, 
				state,
				zip,
				email,
				phone,
				address1,
				address2,
				size,  
				description
			} = targetPet;
			return (
				<div className="detail-page">
					<Nav />
					<main role="main">
						<section>
							<h1>{name}</h1>
							<img alt="" src={photo}  />
							<p>
								<span className="breed">{breed}</span> • 
								<span className="city"> {city}</span>,
								<span className="state"> {state}</span>
							</p>
							<p>
								<span className="age">{age}</span> •
								<span className="gender"> {sex}</span> •
								<span className="size"> {size}</span>
							</p>
							<h2>Meet {name}</h2>
								<p>{description}</p>
							<h2>Shelter</h2>
								<ul>
									<li className="shelter-name"> </li>
									<li className="shelter-address">{address1} {address2}</li>
									<li className="shelter-city-state">{city}, {state} {zip}</li>
									<li className="shelter-phone">{phone}</li>
									<li className="shelter-email">{email}</li>
								</ul>
						</section>
					</main>

				</div>
			);
		}
	}
}


const mapStateToProps = state => ({
	savedPets: store.getState().adoptr.savedPets
});

export default connect(mapStateToProps)(DetailPage);