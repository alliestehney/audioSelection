import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from './SongCard';
import { prev } from '../actions';

class SongsList extends Component {

	render() {
		console.log(this.props.songs);
		return(
			<div>
				<h2 className="ListHeading">Check out these songs:</h2>
				<button className="BackBtn" onClick={this.handlePrevious.bind(this)}>Go Back</button>
				<button className="HomeBtn" onClick={this.handleGoHome.bind(this)}>Home</button>
				<ul className="Wrapper">
					{this.props.songs.map(song => 
						<Song key={song.trackId} song={song} />
					)}
				</ul>
			</div>
		);
	}

	handlePrevious(event) {
		event.preventDefault();
		this.props.prev("music_genre_list");
	}

	handleGoHome(event) {
		event.preventDefault();
		this.props.prev("audio_type");
	}
}

function mapStateToProps(state) {
	return {
		songs: state.songs
	}
}

const mapActionsToProps = {
	prev
}

export default connect(mapStateToProps, mapActionsToProps)(SongsList);