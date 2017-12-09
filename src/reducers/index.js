const INITIAL_STATE = {
	audioType: "",
	currentComponent: "audio_type"
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
		default:
			return state;
	}
}