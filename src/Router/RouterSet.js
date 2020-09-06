import React from "react";
import {
	BrowserRouter as BRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Header from 'Layout/Header';
import Home from 'Page/Home';
import Tv from 'Page/Tv';
import Movie from 'Page/Movie';
import Search from 'Page/Search';
import Detail from 'Page/Detail';

const RouterSet = () => {
	return (
		<BRouter>
			<Header />
			{/* <Gnb /> */}
			<div id="container">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/tv" exact component={Tv} />
					<Route path="/movie" exact component={Movie} />
					<Route path="/detail/:type/:id" exact component={Detail} />
					<Route path="/search/:keyword" exact component={Search} />
					<Redirect from="*" to="/" />
				</Switch>
			</div>
			{/* <Footer /> */}
		</BRouter>
	);
}

export default RouterSet;