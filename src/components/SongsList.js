import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from './SongCard';

class SongsList extends Component {

	render() {
		console.log(this.props.songs);
		return(
			<div>
				<h2>These are the songs for you</h2>
				<ul>
					{this.props.songs.map(song => 
						<Song song={song} />
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