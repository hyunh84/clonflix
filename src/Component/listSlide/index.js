import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// install Swiper components
SwiperCore.use([Navigation]);

const ListSlide = ({title, type, data})=>{
	const swiperEl = useRef(null);
	const slideItemLoaded = ()=>{
		swiperEl.current.swiper.update();
	}
	const swiperPrev = ()=>{
		swiperEl.current.swiper.slidePrev(600);
	}
	const swiperNext = ()=>{
		swiperEl.current.swiper.slideNext(600);
	}
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
					{/* <em className="num">{avg}</em> */}
				</span>
			</>
		);
		
	}

	useEffect(()=>{

	});

	return(
		<div className="listSlideWrap">
			{
				title && 
				<div className="titBox">
					<strong className="tit">{title}</strong>
				</div>
			}
			{
				data && 
				<>
					<button type="button" className="slide-prev" onClick={()=>swiperPrev()}><em>이전</em></button>
					<Swiper
						wrapperTag={'ul'}
						// freeMode={true}
						slidesPerView={5}
						slidesPerGroup={5}
						spaceBetween={20}
						simulateTouch={false}
						ref={swiperEl}
					>
						{
							data.map((info, i)=>(
								<SwiperSlide
									key={i}
									tag={'li'}
									onLoad={()=>slideItemLoaded()}
								>
									<Link to={`/detail/:${type}/:${info.id}`} className="videoCardBox">
										<span className="img">
											<span><img src={`https://image.tmdb.org/t/p/w300/${info.poster_path}`} alt="" /></span>
										</span>
										<div className="info">
											<strong className="name">{info.original_name || info.title}</strong>
											<span className="date">
												{info.release_date && info.release_date.split('-')[0]}
												{info.first_air_date &&  info.first_air_date.split('-')[0]}
											</span>
											{
												info.vote_average && 
												averageFn(info.vote_average)
											}
										</div>
									</Link>
								</SwiperSlide>

							))
						}
					</Swiper>
					<button type="button" className="slide-next" onClick={()=>swiperNext()}><em>다음</em></button>
				</>
			}
		</div>
	);
}

ListSlide.propTypes = {
	data : PropTypes.array.isRequired,
	title : PropTypes.string,
	type : PropTypes.string,
}


export default ListSlide;