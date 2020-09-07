import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VideoCard = ({name, date, rating, mediaType, videoID, posterUrl})=>{
	const averageFn = (average)=>{
		var avg = average / 2;
		var classTxt = 's';
		var integer = parseInt(avg, 10);
		var decimal = avg % integer;

		classTxt += `0${Math.round(avg)}`;
		classTxt += decimal <= 0.5 && decimal > 0 ? 'Half' : '';

		return(
			<>
				<span className={`starAverage ${classTxt}`}>
					<em className="num">{avg}</em>
				</span>
			</>
		);
		
	}

	return(
		<>
			<Link to={`/detail/:${mediaType}/:${videoID}`} className="videoCardBox">
				<span className={`img ${posterUrl === '' ? 'noImage' : ''}`}>
					{posterUrl !== '' && <span><img src={`https://image.tmdb.org/t/p/w300/${posterUrl}`} alt="" /></span>}
				</span>
				<div className="info">
					<strong className="name">{name}</strong>
					{
						date && 
						<span className="date">
							{date}
						</span>
					}
					{averageFn(rating)}
				</div>
			</Link>
		</>
	);
}

VideoCard.propTypes = {
	mediaType: PropTypes.string.isRequired,
	videoID: PropTypes.number.isRequired,
	posterUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	date: PropTypes.any,
	rating: PropTypes.number.isRequired,
}

export default VideoCard;