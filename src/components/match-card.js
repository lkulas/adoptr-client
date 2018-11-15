import React from 'react';

import './match-card.css';

export default function MatchCard(props) {
	return (
			<div class="card">
				<img class="card-image" src="https://www.what-dog.net/Images/faces2/main001.jpg" />
				<p>
					<span class="name">Rufus</span>, 
					<span class="distance"> 5 mi away</span>
				</p>
				<p>
					<span class="age">Puppy</span> • 
					<span class="breed"> Beagle</span>
				</p>
				<ul>
					<li>Good with children</li>
					<li>Not good with other dogs</li>
					<li>Housebroken</li>
				</ul>
			</div>
	);
}