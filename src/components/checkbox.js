import React from 'react';
import './checkbox.css';

export default class CheckBox extends React.Component {
	componentDidUpdate(prevProps) {
		if (!prevProps.meta.active && this.props.meta.active) {
			this.input.focus();
		}
	}
	render() {
		let error;
		if (this.props.meta.touched && this.props.meta.error) {
			error = <div className="form-error">{this.props.meta.error}</div>;
		}
		let warning;
		if (this.props.meta.touched && this.props.meta.warning) {
			warning = <div className="form-warning">{this.props.meta.warning}</div>;
		}
		return (
			<span className="checkbox">
				<label>
		    <input 
		    {...this.props.input} 
		    id={this.props.input.name}
		    type={this.props.type}
		    ref={input => (this.input = input)}
		    />
		    {this.props.label}</label>
		    <div className="text-error">{error}</div>
		    <div className="text-warning">{warning}</div>
		  </span>
		)
	}
}