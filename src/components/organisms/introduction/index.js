import React from 'react'

import styles from './style.module.css'
import TextBox from './../../atoms/textBox'

const Introduction = props => {
	return (
		<div className={styles.introduction}>
			<TextBox theme="subHead">
				Brief Introduction
			</TextBox>
			<TextBox theme="paragraph">
				<p>
					I am a self-learner and a fresher, skilled with HTML5, CSS3, JavaScript, MERN stack, and Figma. I love to design and develop web applications that can provide the best user-friendly experience and features to the user. I believe that a web app can give the best native experience to users and rich any device in the world.
				</p>
				<p>
					I am a resident of Udhampur, Jammu & Kashmir, India. Currently, pursuing my B.tech degree in Computer Science Engineering from Technology Education and Research Integrated Institutions under Kurukshetra University. 
				</p>
				<p>
					I am a nature lover and do nature photography as a hobby.
				</p>
			</TextBox>
		</div>
	)
}

export default Introduction