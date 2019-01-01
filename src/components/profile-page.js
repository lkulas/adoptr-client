import React from 'react';
import Nav from './nav';
import ProfileForm from './profile-form';
import './profile-page.css';

export default function ProfilePage(props) {
	return (
		<div className="profile-page">
			<Nav />
			<header>
				<h1>Set your preferences</h1>
			</header>
			<ProfileForm />
		</div>
	);
}