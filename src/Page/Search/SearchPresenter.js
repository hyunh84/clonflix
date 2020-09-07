import React, {useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import { GState } from 'Router/GState';
import VideoCard from 'Component/VideoCard';

const SearchPresenter = ({searchResults, keyword})=>{
	const {setDepth1} = useContext(GState);
	// const {url} = useRouteMatch();

	useEffect(()=>{
		setDepth1('search');
	});

	return(
		<div className="contents">
			<div className="srchKeywordWrap">
				<strong>{keyword}</strong> 검색 결과입니다.
			</div>
			<div className="listWrap">
				<ul>
					{
						searchResults && searchResults.length > 0 &&
						searchResults.map((info, i)=>(
							<li key={i}>
								<VideoCard
									mediaType={info.release_date ? 'movie' : 'tv'}
									videoID={info.id}
									posterUrl={info.poster_path ? info.poster_path : ''}
									name={info.original_name || info.original_title}
									date={
										info.release_date ? info.release_date.split('-')[0] : info.first_air_date && info.first_air_date.split('-')[0]
									}
									rating={info.vote_average}
								/>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
}

SearchPresenter.propTypes = {
	searchResults : PropTypes.array.isRequired,
	keyword : PropTypes.string.isRequired,
}

export default SearchPresenter;