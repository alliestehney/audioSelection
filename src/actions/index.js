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

export function showSongs(musicGenre) {
	return {
		type: "SHOW_SONGS",
		musicGenre
	}
}