import React, {useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import { GState } from 'Router/GState';

const SearchPresenter = ({results})=>{
	const {setDepth1} = useContext(GState);
	// const {url} = useRouteMatch();

	useEffect(()=>{
		// setDepth1('tv');
		setDepth1('search');
	});

	return(
		<div className="contents">
			search
		</div>
	);
}

SearchPresenter.propTypes = {
	results : PropTypes.object.isRequired,
}

export default SearchPresenter;