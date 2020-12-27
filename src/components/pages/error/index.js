import React from 'react'

import styles from './style.module.css'

const ErrorPage = props => {
	const { text } = props; 
	return (
		<div className={styles.errorPage}>
			<div className={styles.textBox}>
				{text}
			</div>
		</div>
	)
}

export default ErrorPage