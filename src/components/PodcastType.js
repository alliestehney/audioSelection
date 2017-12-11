import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prev, fetchPlaylists } from '../actions';

class PodcastType extends Component {

	render() {

		return(
			<div className="MealTypeForm">
				<p className="points">TOTAL POINTS: 1</p>
				<h3>Select one category that interests you the most.</h3>
				<ul className="PodcastTypes">
					<li><button type="button" className="btn btn-info" value="sports" onClick={this.handleInputChange.bind(this)}>Sports</button></li>
					<li><button type="button" className="btn btn-info" value="current+events" onClick={this.handleInputChange.bind(this)}>Current Events</button></li>
					<li><button type="button" className="btn btn-info" value="history" onClick={this.handleInputChange.bind(this)}>History</button></li>
					<li><button type="button" className="btn btn-info" value="entrepreneurship" onClick={this.handleInputChange.bind(this)}>Entrepreneurship</button></li>
				</ul>
				<button className="GoBack" onClick={this.handlePrevious.bind(this)}>Go Back</button>
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