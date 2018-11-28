import React from 'react';
import './info-section.css';

export default function InfoSection(props) {
	return (
		<div className="info-section">
			<section>
				<header>
					<h3>Set your preferences</h3>
				</header>
				<p>*Screenshot of profile page*</p>
			</section>
			<section>
				<header>
					<h3>View potential matches and save your favorites</h3>
				</header>
				<p>*Screenshot of match*</p>
			</section>
			<section>
				<header>
					<h3>Connect with shelters and adopt your new best friend</h3>
				</header>
			</section>
		</div>
	);
}