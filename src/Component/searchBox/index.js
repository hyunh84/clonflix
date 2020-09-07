import React from 'react';

const SearchBox = ()=>{
	const searchSubmit = (e)=>{
		var target = e.target;
		var keycode = e.keyCode;
		var val = target.value;

		if(keycode === 13) {
			// console.log(location);
			// history.push(`/search/:${val}`);
			window.location.href = `/search/:${val}`;
		}
	}

	return(
		<label className="searchBox">
			<input type="text" placeholder="검색어 입력" onKeyUp={(e)=>searchSubmit(e)} />
		</label>
	);
}

export default SearchBox;