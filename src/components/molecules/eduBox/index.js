import React from 'react'

import styles from './style.module.css'
import TextBox from './../../atoms/textBox'
import Button from './../../atoms/button'

const EduBox = props => {
	const {date, percentage, stream, institute} = props;

	return (
		<div className={styles.flex}>
		<div className={styles.eduBox}>
			<div className={styles.containerBox}>
				<Button 
					theme="secondary" 
					size="small">
					{date}
				</Button>
				<TextBox theme="subHead3">
					{ percentage 
						? `Percentagee: ${percentage}`
						: percentage
					}
				</TextBox>
			</div>
			<div className={styles.containerBox}>
				<TextBox theme="subHead3">
					{ stream }
				</TextBox>
				<TextBox theme="subHead2">
					{ institute }
				</TextBox>
			</div>
			</div>
		</div>
	)
}

export default EduBox