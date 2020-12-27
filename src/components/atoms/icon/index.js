import React from 'react'

import styles from './style.module.css'

const Icon = props=> {
	const { size, theme, iconName, ...otherProps } = props;
	const classProps = [styles[size], styles[theme]].join(' ');

	return (
		<span className={classProps} {...otherProps}>
			<i className={`fa fa-${iconName}`}></i>
		</span>
	)
}

export default Icon