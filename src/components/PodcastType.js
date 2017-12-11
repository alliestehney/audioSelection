import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prev } from '../actions';

class PodcastType extends Component {

	render() {

		return(
			<div className="MealTypeForm">
				<h2>TEST: SHOWING PODCAST PAGE</h2>
				<button onClick={this.handlePrevious.bind(this)}>Previous</button>
			</div>
		);
	}

	handlePrevious(event) {
		event.preventDefault();
		this.props.prev("audio_type")
	}
}

const mapActionsToProps = {
	prev
}

export default connect(null, mapActionsToProps)(PodcastType);