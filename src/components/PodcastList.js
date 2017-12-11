import React, { Component } from 'react';
import { connect } from 'react-redux';
import PodcastCard from './PodcastCard';
import { prev } from '../actions';

class PodcastList extends Component {

	render() {
		console.log(this.props.songs);
		return(
			<div>
				<h2 className="ListHeading">Try out these podcasts!</h2>
				<button onClick={this.handlePrevious.bind(this)}>Go Back</button>
				<ul>
					{this.props.playlists.map(podcast => 
						<PodcastCard key={podcast.trackId} podcast={podcast} />
					)}
				</ul>
			</div>
		);
	}

	handlePrevious(event) {
		event.preventDefault();
		this.props.prev("podcast_list");
	}
}

function mapStateToProps(state) {
	return {
		playlists: state.playlists
	}
}

const mapActionsToProps = {
	prev
}

export default connect(mapStateToProps, mapActionsToProps)(PodcastList);