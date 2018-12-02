import React from 'react';

export default function CheckBox({ error, checked, input, ...rest }) {
	return (
	  <span>
	    <span>{input.name}</span>
	    <input {...input} type="checkbox" checked={input.checked}/>
	  </span>
	)
};