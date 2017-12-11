import {fetchSongs} from '../actions';

const INITIAL_STATE = {
	audioType: "",
	currentComponent: "audio_type",
	musicGenre: "",
	songs: []
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case "SHOW_MUSIC_GENRE":
			return Object.assign({}, state, {
				audioType: action.audiotype,
				currentComponent: "music_genre_list"
			});
		case "SHOW_PODCAST_LIST":
			return Object.assign({}, state, {
				audioType: action.audiotype,
				currentComponent: "podcast_list"
			});
		case "SHOW_SONGS":
			return Object.assign({}, state, {
				musicGenre: action.musicGenre
			});
		case "REQUEST_SONGS":
			return Object.assign({}, state, {
				musicGenre: action.musicGenre
			});
		case "RECEIVE_SONGS":
			console.log("IN RECEIVE SONGS");
			return Object.assign({}, state, {
				songs: action.songs
			});
		case "PREV":
			return Object.assign({}, state, {
				currentComponent: action.currentComponent
			});
		default:
			return state;
	}
}