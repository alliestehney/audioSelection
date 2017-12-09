import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMusicGenre } from '../actions';

class AudioType extends Component {

	render() {

		return(
			<div className="MealTypeForm">
				<h1>Do you want to listen to music?</h1>
				<ul className="MealTypes">
					<li><button type="button" value="music" onClick={this.handleInputChange.bind(this)}>Yes</button></li>
					<li><button type="button" value="podcast" onClick={this.handleInputChange.bind(this)}>No, but I want to listen to a podcast.</button></li>
				</ul>
			</div>
		);
	}

	handleInputChange(event) {
		const VAL = event.currentTarget.value;
		console.log("HANDLE INPUT: ", VAL);
		console.log(event.currentTarget.value);
		this.props.onClick(event.currentTarget.value);
	}
}

const mapActionsToProps = {
	onClick: showMusicGenre
}

export default connect(null, mapActionsToProps)(AudioType);