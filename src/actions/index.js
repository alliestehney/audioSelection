import $ from 'jquery-ajax';

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

export function prev(currentComponent) {
	return {
		type: "PREV",
		currentComponent
	}
}

export function next() {
	return {
		type: "NEXT"
	}
}

const baseURL = "https://itunes.apple.com/search?entity=song&";
export function fetchSongs(musicGenre, callback) {
	return function(dispatch, getState) {
		console.log("in 2nd function");
		dispatch(requestSongs(musicGenre));

		const state = getState();
		var genre = state.musicGenre;
		
		var url = baseURL + "term=" + genre;
		console.log(url);

		console.log("about to make get request");

		$.getJSON(url, function(data) {
			console.log("MAKING GET REQUEST");
			console.log(data);
			const songs = data.results;
			dispatch(receiveSongs(songs));
		}).done(function() {
			console.log('done');
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log(jqXHR.response);
			console.log(errorThrown);
		});
	}
}

export function fetchPlaylists(playlistType) {
	return function(dispatch, getState) {
		dispatch(requestPlaylists(playlistType));

		const state = getState();
		var type = state.playlistType;

		var url = "https://itunes.apple.com/search?entity=podcast&term="+type;

		$.getJSON(url, function(data) {
			const playlists = data.results;
			console.log(data);
			dispatch(receivePlaylists(playlists));
		});
	}
}

export function requestSongs(musicGenre) {
	return {
		type: "REQUEST_SONGS",
		musicGenre
	}
}

export function receiveSongs(songs) {
	return {
		type: "RECEIVE_SONGS",
		songs
	}
}

export function requestPlaylists(playlistType) {
	return {
		type: "REQUEST_PLAYLISTS",
		playlistType
	}
}

export function receivePlaylists(playlists) {
	return {
		type: "RECEIVE_PLAYLISTS",
		playlists
	}
}