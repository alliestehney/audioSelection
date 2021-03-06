import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMusicGenre, showPodcastList } from '../actions';

class AudioType extends Component {

	render() {

		return(
			<div className="MealTypeForm" >
				<p className="points">TOTAL POINTS: 0</p>
				<h1>Do you want to listen to music?</h1>
				<ul className="MealTypes">
					<li><button type="button" className="btn btn-success" value="music" onClick={this.handleInputChange.bind(this)}>Yes</button></li>
					<li><button type="button" className="btn btn-danger" value="podcast" onClick={this.handleInputChange.bind(this)}>No</button></li>
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