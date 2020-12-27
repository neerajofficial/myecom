import React from 'react'

import styles from './style.module.css'

const Backdrop = props => {
	const { children, clicked } = props;
	return (
		<div className={styles.backdrop} onClick={clicked}>
			{children}
		</div>
	)
}

export default Backdrop