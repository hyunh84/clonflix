import React from "react";
import MoviePresenter from "./MoviePresenter";
import { movieApi } from "Api/api";

export default class extends React.Component{
	state={
		nowPlaying: null,
		upcoming: null,
		popular: null,
		topRated: null,
		error: null,
		loading: true,
	};

	async componentDidMount() {
		try{
			const {
				data : {results : nowPlaying}
			} = await movieApi.nowPlaying();
			const {
				data : {results : upcoming}
			} = await movieApi.upcoming();
			const {
				data : {results : topRated}
			} = await movieApi.topRated();
			const {
				data : {results : popular}
			} = await movieApi.popular();
			this.setState({
				nowPlaying,
				upcoming,
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
		const {nowPlaying, upcoming, popular, topRated, error, loading} = this.state;
		if(!loading) {
			// console.log(this.state);
			return(
				<MoviePresenter
					nowPlaying={nowPlaying}
					upcoming={upcoming}
					popular={popular}
					topRated={topRated}
				/>
			);
		}
		return '';
	}
};