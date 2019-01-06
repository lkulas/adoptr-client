import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav';
import SavedMatchCard from './saved-match-card';
import store from '../store';
import {getAdoptr} from '../actions/adoptr';

export class AllMatchesPage extends React.Component {
	componentDidMount() {
		this.props.dispatch(getAdoptr());
	}

	render() {
		if (this.props.savedPets.length === 0) {
			return (
				<div className="all-matches">
					<Nav />
					<main>
						<div className="row pad-25">
							<div className="col-12">
								<h2>You haven't matched with any dogs yet!</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h3>
									<a href="/match" className="teal">Get Started</a>
								</h3>
							</div>
						</div>
					</main>
				</div>
			);
		} else {
			const pets = this.props.savedPets.map((match, index) => (
				<div key={index} className="col-6">
					<SavedMatchCard match={match}/>
				</div>
			));
			return (
				<div className="all-matches">
					<Nav />
					<main>
						<div className="row">
							{pets}
						</div>
					</main>
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	savedPets: store.getState().adoptr.savedPets
});

export default connect (mapStateToProps)(AllMatchesPage);