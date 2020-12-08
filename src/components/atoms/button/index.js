import React from 'react'

import styles from './style.module.css'

const Button = props => {
	const {children} = props;
	const styleProp = [styles.button, styles[props.theme], styles[props.size]].join(' ');
	
	return (
		<button className={styleProp} {...props}>
			{children}
		</button>
	)
}

export default Button