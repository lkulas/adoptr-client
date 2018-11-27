import React from 'react';

import Nav from './nav';

export default function DetailPage(props) {
	return (
		<div className="detail-page">
			<Nav />
			<main role="main">
				<section>
				this.props.match.params.detailId
				</section>
			</main>
		</div>
	);
}