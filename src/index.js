import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from './reducers'

const middleware = applyMiddleware(thunk, createLogger())


const store = createStore(reducer, middleware)

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
	<App />
	</BrowserRouter>
	</Provider>
	, 

	document.getElementById('root'));
registerServiceWorker();
