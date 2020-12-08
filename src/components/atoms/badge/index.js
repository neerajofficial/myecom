import React from 'react'
import styles from './style.module.css'

const Badge = props => {
	const classProps = [styles.badge, styles[props.theme]].join(' ');
	return (
		<span className={classProps}>
			{props.text}
		</span>
	)
}

export default Badge