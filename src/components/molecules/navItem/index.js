import React from 'react'

import { Link  } from 'react-scroll'

import styles from './style.module.css'

const NavItem = props => {
	const {navItem, clicked} = props;

	return (
		<Link  
			key={navItem.id} 
			to={navItem.path} 
			smooth={true} 
			duration={1000}
			spy={true} 
			activeClass={styles.active}
			className={styles.item}
			onClick={clicked}
		>
			<li className={styles.item_nav}>
				{navItem.name}
			</li>
		</Link>
	)
}

export default NavItem