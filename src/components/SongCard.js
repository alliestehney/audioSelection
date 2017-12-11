import React, { Component } from 'react';


class Song extends Component {

	render() {
		const song = this.props.song;

		return(
				<div className="songCard">
					<div className="Title">{song.trackCensoredName}</div>
					<div className="Artist">{song.artistName}</div>
				</div>

		);
	}
}

export default Song;