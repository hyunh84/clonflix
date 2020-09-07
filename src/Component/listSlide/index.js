import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import VideoCard from 'Component/VideoCard';

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
									<VideoCard
										mediaType={type}
										videoID={info.id}
										posterUrl={info.poster_path}
										name={info.original_name || info.title}
										date={
											info.release_date ? info.release_date.split('-')[0] : info.first_air_date &&  info.first_air_date.split('-')[0]
										}
										rating={info.vote_average}
									/>
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