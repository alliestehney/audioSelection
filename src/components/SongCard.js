import React, { Component } from 'react';


class Song extends Component {

	render() {
		const song = this.props.song;

		return(
				<div className="SongCard">
					<p>{song.trackCensoredName}</p>
					<div className="Image">
						<img src={song.artworkUrl100} alt="album artwork" />
					</div>
					<a href={song.previewUrl} target="_blank"><i className="fas fa-play-circle PlayIcon"></i></a>
				</div>

		);
	}
}

export default Song;