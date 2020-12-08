import React from 'react'
import { Link } from 'react-scroll'

import styles from './style.module.css'
import Button from './../../atoms/button'
import TextBox from './../../atoms/textBox'

const HomeText = props => {

	return (
		<div className={styles.homeText}>
			<TextBox theme="textGrey">
				Full-Stack Web Developer
			</TextBox>
			<TextBox theme="textDark">
				Neeraj Singh
			</TextBox>
		 	<TextBox theme="textDarkGrey">
				I believe that a web application is the best way to interact with the whole world. A web application can be accessed by any device within few seconds.
			</TextBox>
			<div className={styles.buttons}>
				<Button theme="primary" size="medium">Resume</Button>
				<Link 
					to="contact" 
					smooth={true} 
					duration={1000}
					spy={true} >
					<Button 
						theme="primary--outline" 
						size="medium" >
						Contact
					</Button>
				</Link>
			</div>
			
		</div>
	)
}

export default HomeText