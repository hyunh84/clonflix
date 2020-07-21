import React, {useState, useEffect} from "react";
import MoviePresenter from "./MoviePresenter";
import { movieApi } from "Api/api";

const MovieContainer = ()=>{
	const [nowPlaying, setNowPlaying] = useState(null);
	const [upcoming, setUpcoming] = useState(null);
	const [popular, setPopular] = useState(null);
	const [topRated, setTopRated] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	async function callData() {
		try{
			var results = null;
			({data : {results}} = await movieApi.nowPlaying());
			setNowPlaying(results);
			({data : {results}} = await movieApi.upcoming());
			setUpcoming(results);
			({data : {results}} = await movieApi.topRated());
			setPopular(results);
			({data : {results}} = await movieApi.popular());
			setTopRated(results);
			
		}catch{
			setError("Can'nt find video information");
		}finally{
			setLoading(false);
		}
	}

	useEffect(()=>{
		if(loading) {
			callData();
			console.log('nowPlaying =  ', nowPlaying);
			// console.log('upcoming = ', upcoming);
			// console.log('popular = ', popular);
			// console.log('topRated = ', topRated);
		}
	});

	return(
		<MoviePresenter
			nowPlaying={nowPlaying}
			upcoming={upcoming}
			popular={popular}
			topRated={topRated}
			error={error}
			loading={loading}
		/>
	);
}

export default MovieContainer;