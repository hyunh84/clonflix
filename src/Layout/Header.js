import React, {useRef, useContext} from 'react';
import { Link } from 'react-router-dom';
import {GState} from 'Router/GState';


const Header = () => {
	const gnbWrapEl = useRef(null);
	const {depth1} = useContext(GState);

	return (
		<header id="header">
			<nav className="gnb">
				<ul ref={gnbWrapEl}>
					<li className={depth1 === '' ? 'active' : ''}>
						<Link to={"/"}>Home</Link>
					</li>
					<li className={depth1 === 'tv' ? 'active' : ''}>
						<Link to={"/tv"}>TV</Link>
					</li>
					<li className={depth1 === 'movie' ? 'active' : ''}>
						<Link to={"/movie"}>Movie</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;