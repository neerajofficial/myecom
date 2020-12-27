import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Homepage from './components/pages/homepage'

const App = () => (
	<Router>
	<Fragment>
		<Homepage />
	</Fragment>
	</Router>
)

export default App