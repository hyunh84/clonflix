import React, {useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import { GState } from 'Router/GState';

const DetailPresenter = ({result, type})=>{
	const {setDepth1} = useContext(GState);
	
	useEffect(()=>{
		setDepth1(type);
	});

	return(
		<div className="contents">

			<div className="videoDetailWrap">
				<div className="inner">
					<div className="posterBox">
						<img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={`${result.original_name || result.name}`} />
					</div>

					<div className="infoBox">
						<strong className="name">{result.original_name || result.original_title}</strong>
						<div className="easyInfo">
							{result.release_date && //영화 개봉일
								<span>{result.release_date.split('-')[0]}</span>
							}
							{ result.runtime && // 영화 런닝타임
								<span>{result.runtime}min</span>
							}
							{result.first_air_date && //TV 방영일
								<span>
									{`${result.first_air_date.split('-')[0]}/${result.first_air_date.split('-')[1]}`} ~ {result.last_air_date && `${result.last_air_date.split('-')[0]}/${result.last_air_date.split('-')[1]}`}
								</span>
							}
							{ result.episode_run_time && // TV 런닝타임
								<span>{result.episode_run_time[0]}min</span>
							}
							{ result.genres && //장르
								<span className="genres">
									{
										result.genres.map((genres, i)=>(
											<span key={i}>{genres.name}</span>
										))
									}
								</span>
							}
						</div>
						<div className="summary">
							{result.overview}
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

DetailPresenter.propTypes = {
	result : PropTypes.object.isRequired,
	type : PropTypes.string.isRequired,
}

export default DetailPresenter;