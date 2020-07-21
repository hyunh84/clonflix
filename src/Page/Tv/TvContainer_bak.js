import React, {useState, useEffect} from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "Api/api";

const TvContainer = (props)=>{
	const [airingToday, setAiringToday] = useState(null);
	const [popular, setPopular] = useState(null);
	const [topRated, setTopRated] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	async function callData() {
		try{
			var results = null;
			({data : {results}} = await tvApi.airingToday());
			setAiringToday(results);
			({data : {results}} = await tvApi.topRated());
			setPopular(results);
			({data : {results}} = await tvApi.popular());
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
			console.log(props);
			// console.log('airingToday =  ', airingToday);
			// console.log('popular = ', popular);
			// console.log('topRated = ', topRated);
		}
	});

	return(
		<TvPresenter
			airingToday={airingToday}
			topRated={topRated}
			popular={popular}
			error={error}
			loading={loading}
		/>
	);
}

export default TvContainer;