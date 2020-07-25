import React from 'react';
import RouterSet from 'Router/RouterSet';
import GStateProvider from 'Router/GState';

const App = () => {
	return (
		<GStateProvider>
			<RouterSet />
		</GStateProvider>
	);
}

export default App;
