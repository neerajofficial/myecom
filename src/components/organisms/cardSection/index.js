import React from 'react'

import styles from './style.module.css'
import { SocialData } from './socialData.js'
import SocialIcon from './../../atoms/socialIcon'
import Button from './../../atoms/button'
import profile from './../../../assets/images/pp.jpg'

const CardSection = props => {
	return (
		<div className={styles.cardSection}>
			{ SocialData.map(icon => (
				<SocialIcon 
					key={icon.id}
					pathUrl={icon.pathUrl}
					nameImg={icon.title}
					height="20px" />
			))}
			<div className={styles.ppImg}>
				<img 
					src={profile} 
					alt="My Profile" 
					height="240px" />
			</div>
			<Button 
				theme="primary--outline" 
				size="medium" >
				Resume
			</Button>
		</div>
	)
}

export default CardSection