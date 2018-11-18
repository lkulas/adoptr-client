import React from 'react';
import './profile-form.css';

export default function ProfileForm(props) {
	return (
		<form id="preference-form">
			<fieldset>
				<legend>Animal</legend>
				<input type="checkbox" />
				<label>Dog</label>
				<input type="checkbox" />
				<label>Cat</label>
			</fieldset>
			<fieldset>
				<legend>Age</legend>
				<input type="checkbox" />
				<label>Puppy or Kitten</label>
				<input type="checkbox" />
				<label>Young</label>
				<input type="checkbox" />
				<label>Adult</label>
				<input type="checkbox" />
				<label>Senior</label>
			</fieldset>
			<fieldset>
				<legend>Size</legend>
				<input type="checkbox" />
				<label>Small</label>
				<input type="checkbox" />
				<label>Medium</label>
				<input type="checkbox" />
				<label>Large</label>
				<input type="checkbox" />
				<label>Extra large</label>
			</fieldset>
			<fieldset>
				<legend>Gender</legend>
				<input type="checkbox" />
				<label>Male</label>
				<input type="checkbox" />
				<label>Female</label>
			</fieldset>
			<fieldset>
				<legend>Good With</legend>
				<input type="checkbox" />
				<label>Children</label>
				<input type="checkbox" />
				<label>Dogs</label>
				<input type="checkbox" />
				<label>Cats</label>
			</fieldset>
			<fieldset>
				<legend>Care & Behavior</legend>
				<input type="checkbox" />
				<label>Housetrained</label>
				<input type="checkbox" />
				<label>Special needs</label>
			</fieldset>
			<fieldset>
				<legend>Search Radius</legend>
				<select>
					<option>10 miles</option>
					<option>25 miles</option>
					<option>50 miles</option>
					<option>Anywhere</option>
				</select>
			</fieldset>
			<button type="submit">Save</button>
		</form>
	);
}