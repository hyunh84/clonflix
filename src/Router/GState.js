import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GState = React.createContext(null);

// 전역으로 사용할 변수 및 function 주입
const GStateProvider = ({ children }) => {

	// 화면 메뉴 1 depth name defualt home
	const [depth1, setDepth1] = useState('');

	const value = {
		depth1,
		setDepth1,
	};
	
	return <GState.Provider value={value}>{children}</GState.Provider>;
};

GStateProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default GStateProvider;
