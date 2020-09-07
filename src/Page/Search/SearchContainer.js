import React from "react";
import SearchPresenter from "./SearchPresenter";
import SearchNoDataPresenter from "./SearchNoDataPresenter";
import { searchApi } from "Api/api";

export default class extends React.Component{
	state={
		keyword: null,
		searchResults: null,
		error: null,
		loading: true,
	};

	async componentDidMount() {
		const {
			match : {
				params : {
					keyword,
				}
			}
		} = this.props;

		try {
			const {
				data: {results : tvResults}
			} = await searchApi.tv(keyword.replace(':', ''));
			const {
				data: {results : movieResults}
			} = await searchApi.movie(keyword.replace(':', ''));

			this.setState({
				keyword : keyword.replace(':', ''),
				searchResults : [...tvResults, ...movieResults],
			});
		} catch {
			this.setState({ error: "Can't find results." });
		} finally {
			this.setState({ loading: false });
		}
	};

	render() {
		const {searchResults, keyword, error, loading} = this.state;

		if(!loading) {
			// console.log(this.state);
			if(searchResults.length > 0) {
				return(
					<SearchPresenter
						keyword={keyword}
						searchResults={searchResults}
					/>
				);
			}else{
				return(
					<SearchNoDataPresenter
						keyword={keyword}
					/>
				);
			}
		}
		return '';
	}
};