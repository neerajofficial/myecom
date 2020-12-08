import React from 'react'
import styles from './style.module.css'

const TextBox = props => {
	const { theme } = props;

	return (
		<div className={styles.textBox}>
			<div className={styles[theme]}>
				{props.children}
			</div>
		</div>
	)
}

export default TextBox