import React, {useEffect, useContext} from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListSlide from 'Component/listSlide';
import { GState } from 'Router/GState';

const TvPresenter = ({airingToday, topRated, popular})=>{
	const {setDepth1} = useContext(GState);
	const {url} = useRouteMatch();

	useEffect(()=>{
		// setDepth1('tv');
		setDepth1(url.split('/')[1]);
	});

	return(
		<div className="contents">

			<ListSlide
				title="금일방영"
				data={airingToday}
				type={'tv'}
			/>
	
			<ListSlide
				title="인기방송"
				data={popular}
				type={'tv'}
			/>
	
			<ListSlide
				title="연관방송"
				data={topRated}
				type={'tv'}
			/>

		</div>
	)
}

TvPresenter.propTypes = {
	airingToday : PropTypes.array.isRequired,
	topRated : PropTypes.array.isRequired,
	popular : PropTypes.array.isRequired, 
}

export default TvPresenter;