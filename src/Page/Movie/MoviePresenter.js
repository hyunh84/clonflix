import React, {useEffect, useContext} from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListSlide from 'Component/listSlide';
import { GState } from 'Router/GState';

const MoviePresenter = ({nowPlaying,upcoming,popular,topRated})=>{
	const {setDepth1} = useContext(GState);
	const {url} = useRouteMatch();

	useEffect(()=>{
		setDepth1(url.split('/')[1]);
	});

	return(
		<div className="contents">

			<ListSlide
				title="개봉예정"
				data={upcoming}
				type={'movie'}
			/>

			<ListSlide
				title="개봉"
				data={nowPlaying}
				type={'movie'}
			/>

			<ListSlide
				title="인기영화"
				data={popular}
				type={'movie'}
			/>

			<ListSlide
				title="비슷한영화"
				data={topRated}
				type={'movie'}
			/>

		</div>
	);
}

MoviePresenter.propTypes = {
	nowPlaying : PropTypes.array.isRequired,
	upcoming : PropTypes.array.isRequired,
	popular : PropTypes.array.isRequired,
	topRated : PropTypes.array.isRequired,
	
}

export default MoviePresenter;