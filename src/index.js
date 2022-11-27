import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/reduxStore';
import App from './App';

let rerender = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App store={store} />
		</React.StrictMode>);

};

rerender(store.getState());

store.subscribe(()=>{
	let state = store.getState();
	rerender(state);
});
