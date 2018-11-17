import React from 'react';

import Nav from './nav';
import ProfileForm from './profile-form';

export default function ProfilePage(props) {
	return (
		<div>
			<Nav />
			<header>
				<h1>Set your preferences</h1>
			</header>
			<ProfileForm />
		</div>
	);
}