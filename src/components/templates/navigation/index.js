import React, { useState } from 'react'
import styles from './style.module.css'
import logo from './../../../assets/images/logo.png'
import Logo  from './../../atoms/logo'
import NavData from './navLinks'
import NavItems from './../../organisms/navItems'

const Navigation = () => {
	const [showMenu, setShow] = useState(false);

	const menuToggler  = () => {
		setShow(!showMenu);
	}

	return (
		<React.Fragment>
		<div className={styles.menu}>
			<i className="fa fa-bars" onClick={menuToggler}></i>
		</div>
		<div className={!showMenu ? styles.navigationNone : styles.bgDrop} onClick={menuToggler} >
			&nbsp;
		</div>
		<div className={showMenu ? styles.navigation : styles.navigationNone}>
			<div className={styles.navigation_logo}>
				<Logo url={logo} />
			</div>
			<div className={styles.navigation_items}  >
				<NavItems 
					navData={NavData} 
					clicked={menuToggler} />
			</div>
		</div>
		</React.Fragment>
	)
}

export default Navigation