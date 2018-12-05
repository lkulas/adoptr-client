import React from 'react';
import {connect} from 'react-redux';

import Nav from './nav';

export default function DetailPage(props) {
	const {params} = props.match;

	return (
		<div className="detail-page">
			<Nav />
			<main role="main">
				<section>
				{params.detailId}
				</section>
			</main>
		</div>
	);
}

