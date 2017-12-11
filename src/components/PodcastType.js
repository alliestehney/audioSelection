import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prev, fetchPlaylists } from '../actions';

class PodcastType extends Component {

	render() {

		return(
			<div className="MealTypeForm">
				<h2>TEST: SHOWING PODCAST PAGE</h2>
				<h3>Select one category that interests you the most.</h3>
				<ul>
					<li><button type="button" value="sports" onClick={this.handleInputChange.bind(this)}>Sports</button></li>
					<li><button type="button" value="currentEvents" onClick={this.handleInputChange.bind(this)}>Current Events</button></li>
					<li><button type="button" value="history" onClick={this.handleInputChange.bind(this)}>History</button></li>
					<li><button type="button" value="entrepreneurship" onClick={this.handleInputChange.bind(this)}>Entrepreneurship</button></li>
				</ul>
				<button onClick={this.handlePrevious.bind(this)}>Previous</button>
			</div>
		);
	}

	handleInputChange(event) {
		event.preventDefault();
		this.props.fetchPlaylists(event.target.value);
	}

	handlePrevious(event) {
		event.preventDefault();
		this.props.prev("audio_type")
	}
}

const mapActionsToProps = {
	prev,
	fetchPlaylists
}

export default connect(null, mapActionsToProps)(PodcastType);