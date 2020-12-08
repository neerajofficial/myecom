import React, { Fragment } from 'react'

import Navigation from './../../templates/navigation'
import Home from './../../templates/home'
import About from './../../templates/about'
import Skills from './../../templates/skills'
// import Work from './../../templates/work'
import Contact from './../../templates/contact'

const Homepage = () => (
	<Fragment>
		<Navigation /> 
		<Home />
		<About />
		<Skills />
		<Contact />
	</Fragment>
)

export default Homepage