import React, {useEffect, useContext} from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { GState } from 'Router/GState';

const DetailPresenter = ()=>{
	const {setParams, setDepth1} = useContext(GState);
	const {id : params} = useParams();
	const {url} = useRouteMatch();
	
	useEffect(()=>{
		setParams(params);
		setDepth1(url.split('/')[1]);

	});

	return(
		<div>DETAIL</div>
	);
}
export default DetailPresenter;