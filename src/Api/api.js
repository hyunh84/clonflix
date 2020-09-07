import axios from "axios";

const Api = axios.create({
	baseURL : "https://api.themoviedb.org/3/",
	params : {
		api_key : "4efdcae366c925f5509cb9116e65e876",
		language : "en-US",
	}
});

const tvApi = {
	airingToday: ()=> Api.get('tv/airing_today'),
	popular: ()=> Api.get('tv/popular'),
	topRated: ()=> Api.get('tv/top_rated'),
}

const movieApi = {
	nowPlaying: ()=> Api.get('movie/now_playing'),
	popular: ()=> Api.get('movie/popular'),
	topRated: ()=> Api.get('movie/top_rated'),
	upcoming: ()=> Api.get('movie/upcoming'),
}

const searchApi = {
	movie: (keyword)=> Api.get('search/movie', {
		params:{
			query: encodeURIComponent(keyword)
		}
	}),
	tv: (keyword)=> Api.get('search/tv', {
		params:{
			query: encodeURIComponent(keyword)
		}
	}),
	keyword: (keyword)=> Api.get('search/multi', {
		params:{
			query: encodeURIComponent(keyword)
		}
	}),
}

const detailApi = {
	detail: (type, id)=> Api.get(`${type}/${id}`, {
		params:{
			append_to_response:'videos'
		}
	})
}

export {tvApi};
export {movieApi};
export {searchApi};
export {detailApi};