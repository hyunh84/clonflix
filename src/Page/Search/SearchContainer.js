import React from "react";
import SearchPresenter from "./SearchPresenter";
import { searchApi } from "Api/api";

export default class extends React.Component{
	state={
		results:null,
		error: null,
		loading: true,
	};

	searchByTerm = async () => {
		const {
			match : {
				params
			}
		} = this.props;
console.log(params);
		try {
			// console.log(keyword.replace(':', ''));
			// const {
			// 	data: results
			// } = await searchApi.keyword(keyword.replace(':', ''));
			// this.setState({
			// 	results,
			// });
		} catch {
			this.setState({ error: "Can't find results." });
		} finally {
			this.setState({ loading: false });
		}
	};

	render() {
		const {results, error, loading} = this.state;

		if(!loading) {
			console.log(this.state);
			return(
				<SearchPresenter
					results={results}
				/>
			);
		}
		return '';
	}
};