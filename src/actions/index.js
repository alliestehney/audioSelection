export function showMusicGenre(audiotype) {
	return {
		type: "SHOW_MUSIC_GENRE",
		audiotype
	}
}

export function showPodcastList(audiotype) {
	return {
		type: "SHOW_PODCAST_LIST",
		audiotype
	}
}