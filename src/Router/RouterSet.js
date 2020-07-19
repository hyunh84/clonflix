import React from "react";
import {
	BrowserRouter as BRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from 'Page/Home';
import Tv from 'Page/Tv';
import Movie from 'Page/Movie';
import Search from 'Page/Search';
import Detail from 'Page/Detail';
import Header from 'Layout/Header';

const RouterSet = () => {
	return (
		<BRouter>
			<Header />
			{/* <Gnb /> */}
			<div id="container">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/tv" component={Tv} />
					<Route path="/movie" component={Movie} />
					<Route path="/search" component={Search} />
					<Route path="/detail" component={Detail} />
					<Redirect from="*" to="/" />
				</Switch>
			</div>
			{/* <Footer /> */}
		</BRouter>
	);
}

export default RouterSet;