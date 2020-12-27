import React from 'react'

import styles from './style.module.css'

const Text = props=> {
	const {value, size, theme } = props;
	const classProps = [styles[size], styles[theme]].join(' ');

	return (
		<span 
			className={classProps} >
				{value}
		</span>
	)
}

export default Text