import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import Store from './store'

import App from './App'

ReactDOM.render(
	<Provider store={Store}>
		<React.StrictMode>
    		<App />
  		</React.StrictMode>
  	</Provider>,
  	document.getElementById('root')
);
