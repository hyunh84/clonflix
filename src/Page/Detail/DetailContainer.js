import React from "react";
import DetailPresenter from "./DetailPresenter";
import { detailApi } from "Api/api";
// 539181

export default class extends React.Component{
	state={
		result: null,
		error: null,
		loading: true,
	};

	async componentDidMount() {
		const {
			match : {
				params: {id : detailID},
				url: detailType,
			},
			history: { push }
		} = this.props;

		try{
			if(isNaN(parseInt(detailID, 10))) {
				return push(`/${detailType.split('/')[1]}`);
			}
			const {
				data : result
			} = await detailApi.detail(detailType.split('/')[1], parseInt(detailID, 10));

			this.setState({
				result,
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
		const {result, error, loading} = this.state;
		console.log(this.state);
		return(
			<DetailPresenter
				result={result}
				error={error}
				loading={loading}
			/>
		);
	}
};