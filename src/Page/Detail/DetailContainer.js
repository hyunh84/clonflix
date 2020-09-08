import React from "react";
import DetailPresenter from "./DetailPresenter";
import { detailApi } from "Api/api";

export default class extends React.Component{
	state={
		type: null,
		result: null,
		error: null,
		loading: true,
	};

	async componentDidMount() {
		const {
			match : {
				params : {
					id : videoID,
					type,
				}
			}
		} = this.props;

		try{
			const {
				data : result
			} = await detailApi.detail(type.replace(':', ''), parseInt(videoID.replace(':', ''), 10));

			this.setState({
				result,
				type:type.replace(':', ''),
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
		const {result, type, error, loading} = this.state;
		if(!loading && !error) {
			// console.log(this.state);
			return(
				<DetailPresenter
					result={result}
					type={type}
				/>
			);
		}
		return '';

	}
};