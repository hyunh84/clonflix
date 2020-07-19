import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
	state={
		nowPlaying: null,
		upcoming: null,
		popular: null,
		error: null,
		loading: true,
	};

	render() {
		const {nowPlaying, upcoming, popular, error, loading} = this.state;

		return(
			<SearchPresenter
				nowPlaying={nowPlaying}
				upcoming={upcoming}
				popular={popular}
				error={error}
				loading={loading}
			/>
		);
	}
};