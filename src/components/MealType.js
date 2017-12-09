import React, { Component } from 'react';

class MealType extends Component {

	render() {

		return(
			<div className="MealTypeForm">
				<h1>Would you like to dine in?</h1>
				<ul className="MealTypes">
					<li><button type="button" value="dineIn" onClick={this.handleClick.bind(this)}>Yes</button></li>
					<li><button type="button" value="takeOut" onClick={this.handleClick.bind(this)}>No, I want to take out.</button></li>
				</ul>
			</div>
		);
	}

	handleClick(event) {
		event.preventDefault();
		this.props.onClick(event.currentTarget.value);
	}
}

export default MealType;