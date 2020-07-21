import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	const gnbWrapEl = useRef(null);

	useEffect(()=>{
		const menuItemEl=gnbWrapEl.current.childNodes;
		// console.log(gnbWrapEl);
		menuItemEl.forEach((val, i)=>{
			val.childNodes[0].addEventListener('click', (e)=>{
				if(val.classList.value !== 'active') {
					menuItemEl.forEach((el, j)=>{
						el.classList.remove('active');
					});
					val.classList.add('active');
				}
			});
		});
	});
	return (
		<header id="header">
			<nav className="gnb">
				<ul ref={gnbWrapEl}>
					<li className="active">
						<Link to={"/"}>Home</Link>
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