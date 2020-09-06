import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default SearchBox ()=>{
	const history = useHistory();
	const searchSubmit = (e)=>{
		var target = e.target;
		var keycode = e.keyCode;
		var val = target.value;

		if(keycode === 13) {
			history.push(`/search/:${val}`);
		}
	}

	return(
		<label className="searchBox">
			<input type="text" placeholder="검색어 입력" onKeyUp={(e)=>searchSubmit(e)} />
		</label>
	);
}
