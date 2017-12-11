import React, { Component } from 'react';

class PodcastCard extends Component {

	render() {
		const podcast = this.props.podcast;

		return(
				<div className="songCard">
					<div className="Title">{podcast.trackCensoredName}</div>
					<div className="Artist">{podcast.artistName}</div>
				</div>

		);
	}
}

export default PodcastCard;