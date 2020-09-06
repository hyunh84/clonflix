import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

const ListSlide = ({title, data})=>{

	const swiperEl = useRef(null);
	const [index, setIndex] = useState(0);
	const params = {
		slidesPerView: 'auto',
		WrapperEl: 'ul',
		freeMode: true,
	}
	const slideLoad = ()=>{
		swiperEl.current.swiper.update();
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
				<Swiper {...params} ref={swiperEl}>
					{
						data.map((info, i)=>(
							<li key={i} className={index === i && 'active'} onLoad={()=>slideLoad()}>
								<Link to="" className='videoCardBox'>
									<span className="img"><img src={`https://image.tmdb.org/t/p/w200/${info.poster_path}`} alt="" /></span>
									<div className="info">
										<strong className="name">{info.original_name || info.title}</strong>
									</div>
								</Link>
							</li>

						))
					}
				</Swiper>
			}
		</div>
	);
}

ListSlide.propTypes = {
	data : PropTypes.array.isRequired,
	title : PropTypes.string,
}


export default ListSlide;