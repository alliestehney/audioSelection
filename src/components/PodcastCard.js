import React, { Component } from 'react';

class PodcastCard extends Component {

	render() {
		const podcast = this.props.podcast;

		return(
				<div className="PodcastCard">
					<div className="Title"><a href={podcast.collectionViewUrl} target="_blank">{podcast.trackCensoredName}</a></div>
					<div className="Artist">{podcast.artistName}</div>
				</div>

		);
	}
}

export default PodcastCard;