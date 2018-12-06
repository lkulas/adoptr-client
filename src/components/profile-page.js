import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav';
import ProfileForm from './profile-form';
import './profile-page.css';

export function ProfilePage(props) {
	const {preferences} = props.preferences;
	return (
		<div className="profile-page">
			<Nav />
			<header>
				<h1>Set your preferences</h1>
			</header>
			<ProfileForm preferences={preferences}/>
		</div>
	);
}

const mapStateToProps = state => ({
	preferences: state.adoptr.preferences
});

export default connect (mapStateToProps)(ProfilePage);