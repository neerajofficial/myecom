import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import styles from './style.module.css'

import Text from './../../atoms/text'

const Navigation = props => {
	const { navLinks, clicked } = props;
	
	return (
		<div className={styles.navigation}>
			<div className={styles.headwrap}>
				<Text 
					size="subHead"
					theme="dark"
					value="Categories" />
			</div>
			<div className={styles.menuwrap}>
			{ navLinks.map(navItem => (
				<NavLink 
					key={navItem.id}
					className={styles.navLink }
					activeClassName={styles.activeClass}
					to={`/${navItem.categoryName}`} >
						<div className={styles.subMenu}>
							{navItem.name}
						</div>
				</NavLink>
			))}
			</div>
		</div>
	)
}

export default Navigation