import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSongs } from '../actions';

class MusicGenre extends Component {

	render() {

		return(
			<div className="MealTypeForm">
				<h2>What kind of music do you want to listen to?</h2>
				<ul className="MusicGenres">
					<li><button type="button" value="pop" onClick={this.handleInputChange.bind(this)}>Pop</button></li>
					<li><button type="button" value="country" onClick={this.handleInputChange.bind(this)}>Country</button></li>
					<li><button type="button" value="rap" onClick={this.handleInputChange.bind(this)}>Rap</button></li>
					<li><button type="button" value="alternative" onClick={this.handleInputChange.bind(this)}>Alternative</button></li>
				</ul>
			</div>
		);
	}

	handleInputChange(event) {
		event.preventDefault();
		this.props.showSongs(event.target.value);

	}

}

const mapActionsToProps = {
	showSongs
}

export default connect(null, mapActionsToProps)(MusicGenre);