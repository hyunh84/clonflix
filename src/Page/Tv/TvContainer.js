import React from "react";
import TvPresenter from "./TvPresenter";

export default class extends React.Component{
	state={
		airingToday: null,
		popular: null,
		topRated: null,
		error: null,
		loading: true,
	};

	render() {
		const {airingToday, topRated, popular, error, loading} = this.state;

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
};