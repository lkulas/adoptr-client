import React from 'react';

import './rating.css';

export default function Rating(props) {
	return (
		<div className="rating">
			<button type="button">X</button>
			<button type="button">Heart</button>
		</div>
	);
}