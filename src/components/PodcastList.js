import React, { Component } from 'react';
import { connect } from 'react-redux';
import PodcastCard from './PodcastCard';

class PodcastList extends Component {

	render() {
		console.log(this.props.songs);
		return(
			<div>
				<h2 className="ListHeading">Try out these podcasts!</h2>
				<ul>
					{this.props.playlists.map(podcast => 
						<PodcastCard key={podcast.trackId} podcast={podcast} />
					)}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		playlists: state.playlists
	}
}

export default connect(mapStateToProps)(PodcastList);