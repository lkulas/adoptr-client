import React from 'react';
import './info-section.css';

export default function InfoSection(props) {
	return (
		<div className="info-section">
			<section>
				<header>
					<h3>View rescues and save your favorites</h3>
				</header>
				<p>*Screenshot of rescue*</p>
			</section>
			<section>
				<header>
					<h3>Connect with shelters and adopt your new best friend</h3>
				</header>
			</section>
		</div>
	);
}