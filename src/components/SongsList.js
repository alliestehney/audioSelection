import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from './SongCard';

class SongsList extends Component {

	render() {
		console.log(this.props.songs);
		return(
			<div>
				<h2 className="ListHeading">Check out these songs:</h2>
				<ul className="Wrapper">
					{this.props.songs.map(song => 
						<Song key={song.trackId} song={song} />
					)}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		songs: state.songs
	}
}

export default connect(mapStateToProps)(SongsList);