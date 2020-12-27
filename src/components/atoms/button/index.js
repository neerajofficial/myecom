import React from 'react'

import styles from './style.module.css'

const Button = props => {
	const { size, theme, clicked, value } = props;
	const buttonStyle = [styles[size], styles[theme]].join(' ');

	return (
		<button
			className={buttonStyle}
			onClick={event => clicked()}
			>
				{value}
		</button>
	)
}

export default Button