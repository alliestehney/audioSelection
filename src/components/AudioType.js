import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMusicGenre, showPodcastList } from '../actions';

class AudioType extends Component {

	render() {

		return(
			<div className="MealTypeForm" >
				<h1>Do you want to listen to music?</h1>
				<ul className="MealTypes">
					<li><button type="button" value="music" onClick={this.handleInputChange.bind(this)}>Yes</button></li>
					<li><button type="button" value="podcast" onClick={this.handleInputChange.bind(this)}>No, but I want to listen to a podcast.</button></li>
				</ul>
			</div>
		);
	}

	handleInputChange(event) {
		if (event.target.value === 'music') {
			this.props.showMusicGenre(event.target.value);
		} else {
			this.props.showPodcastList(event.target.value);
		}
	}
}

const mapActionsToProps = {
	showMusicGenre,
	showPodcastList
}

export default connect(null, mapActionsToProps)(AudioType);