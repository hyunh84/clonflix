import React from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "Api/api";

export default class extends React.Component{
	state={
		airingToday: null,
		popular: null,
		topRated: null,
		error: null,
		loading: true,
	};

	async componentDidMount() {
		try{
			const {
				data : {results : airingToday}
			} = await tvApi.airingToday();
			const {
				data : {results : topRated}
			} = await tvApi.topRated();
			const {
				data : {results : popular}
			} = await tvApi.popular();
			this.setState({
				airingToday,
				topRated,
				popular,
			});
		}catch{
			this.setState({
				error : "Can'nt find video information"
			});
		}finally{
			this.setState({
				loading : false
			});
		}
	}

	render() {
		const {airingToday, topRated, popular, error, loading} = this.state;
		if(!loading && !error) {
			// console.log(this.state);
			return(
				<TvPresenter
					airingToday={airingToday}
					topRated={topRated}
					popular={popular}
				/>
			);
		}
		return '';
	}
};