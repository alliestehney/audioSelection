import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prev, fetchSongs, showSongs,receiveSongs } from '../actions';

class MusicGenre extends Component {

	render() {

		return(
			<div className="MealTypeForm">
				<h2>What kind of music do you want to listen to?</h2>
				<ul className="MusicGenres">
					<li><button type="button" className="btn btn-info" value="pop" onClick={this.handleInputChange.bind(this)}>Pop</button></li>
					<li><button type="button" className="btn btn-info" value="country" onClick={this.handleInputChange.bind(this)}>Country</button></li>
					<li><button type="button" className="btn btn-info" value="rap" onClick={this.handleInputChange.bind(this)}>Rap</button></li>
					<li><button type="button" className="btn btn-info" value="alternative" onClick={this.handleInputChange.bind(this)}>Alternative</button></li>
				</ul>
				<button onClick={this.handlePrevious.bind(this)}>Previous</button>
			</div>
		);
	}

	handleInputChange(event) {
		event.preventDefault();
		this.props.fetchSongs(event.target.value)
	}

	handlePrevious(event) {
		event.preventDefault();
		this.props.prev("audio_type")
	}

}

const mapActionsToProps = {
	fetchSongs,
	receiveSongs,
	prev
}

export default connect(null, mapActionsToProps)(MusicGenre);