import React, {useContext, useEffect} from 'react';
import { GState } from 'Router/GState';

const SearchNoDataPresenter = ({keyword})=>{
	const {setDepth1} = useContext(GState);

	useEffect(()=>{
		setDepth1('search');
	});

	return(
		<div className="contents">
			<div className="searchNoDataBox">
				<strong>{keyword}</strong> 검색 결과가 없습니다.
			</div>
		</div>
	);
}


export default SearchNoDataPresenter;