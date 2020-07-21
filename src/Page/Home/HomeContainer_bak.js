import React, {useState, useEffect} from "react";
import HomePresenter from "./HomePresenter";
import { movieApi, tvApi } from "Api/api";

const HomeContainer = ()=>{
	const [moviePopular, setMoviePopular] = useState(null);
	const [tvPopular, setTVPopular] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	async function callData() {
		try{
			var results = null;
			({data : {results}} = await movieApi.popular());
			setMoviePopular(results);
			({data : {results}} = await tvApi.popular());
			setTVPopular(results);
			
		}catch{
			setError("Can'nt find video information");
		}finally{
			setLoading(false);
		}
	}

	useEffect(()=>{
		if(loading) {
			callData();
			// console.log(moviePopular);
			// console.log(tvPopular);
		}
	});

	return(
		<HomePresenter
			tvPopular = {tvPopular}
			moviePopular = {moviePopular}
			error = {error}
			loading = {loading}
		/>
	);
}

export default HomeContainer;