import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioType from './AudioType';
import MusicGenre from './MusicGenre';
import PodcastType from './PodcastType'

class App extends Component {
  render() {

  	if (this.props.currentComponent === "audio_type") {
  		return (
  			<AudioType onClick={this.props.showMusicGenre}/>
  		);
  	} else if (this.props.currentComponent === "music_genre_list") {
  		return (
  			<MusicGenre />
  		);
  	} else if (this.props.currentComponent === "podcast_list") {
  		return (
  			<PodcastType />
  		);
  	} else {
  		return (
  			<AudioType />
  		)
  	}
  }
}

function mapStateToProps(state) {
	return {
		currentComponent: state.currentComponent
	}
}

export default connect(mapStateToProps)(App);
