import React from 'react'

import styles from './style.module.css'
import Button from './../../atoms/button'
import NavItem from './../../molecules/navItem'

const NavItems = ({ navData, clicked }) => {
	return (
		<div className={styles.navItems}>
			<ul className={styles.navItems_List}>
			{navData.map(item => 
				<NavItem navItem={item} key={item.id} clicked={clicked}/>
			)}
			</ul>
			<Button 
				theme="primary"
				size="small" >
				Resume
			</Button>
		</div>
	)
}

export default NavItems