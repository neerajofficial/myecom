import React from 'react'

import round from './../../../assets/images/round.png'
import styles from './style.module.css'
import TextBox from './../../atoms/textBox'

const HeadSection = ({text}) => {
	return (
		<div className={styles.headSection} >
			<TextBox theme="heading">
				{text}
			</TextBox>
			<div className={styles.bottomBorder}>
				<img src={round} height="26px" />
			</div>
		</div>
	)
}

export default HeadSection