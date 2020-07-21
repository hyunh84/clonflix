import React from "react";
import SearchPresenter from "./SearchPresenter";
import { searchApi } from "Api/api";

export default class extends React.Component{
	state={
		movieResults:null,
		tvResults:null,
		error: null,
		loading: true,
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({ loading: true });
		try {
			const {
				data: { results: movieResults }
			} = await searchApi.movie(searchTerm);
			const {
				data: { results: tvResults }
			} = await searchApi.tv(searchTerm);
			this.setState({
				movieResults,
				tvResults
			});
		} catch {
			this.setState({ error: "Can't find results." });
		} finally {
			this.setState({ loading: false });
		}
	};

	render() {
		const {movieResults, tvResults, error, loading} = this.state;

		return(
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				error={error}
				loading={loading}
			/>
		);
	}
};