import React from 'react';
import './checkbox.css';

export default function CheckBox({ error, checked, input, ...rest }) {
	return (
		<span className="checkbox">
	    <input {...input} type="checkbox" checked={checked}/>
	    <label>{input.name}</label>
	  </span>
	)
};