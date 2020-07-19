import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	
	
	return (
		<header id="header">
			<nav className="gnb">
				<ul>
					<li>
						<Link to={"/home"}>Home</Link>
					</li>
					<li>
						<Link to={"/tv"}>TV</Link>
					</li>
					<li>
						<Link to={"/movie"}>Movie</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;