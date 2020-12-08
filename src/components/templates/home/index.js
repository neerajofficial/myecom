import React from 'react'
import img from './../../../assets/images/illustration.png'
import styles from './style.module.css'

import HomeText from './../../organisms/homeText'

const Home = () => {
	return (
		<div className={styles.home} id="home">
		<div className={styles.grid}>
			<div className={styles.textContainer}>
				<HomeText />
			</div>
			<div>&nbsp;</div>
			<div className={styles.image}>
				<img src={img} alt="illustration" height="400px" />
			</div>
		</div>
		</div>
	)
}

export default Home