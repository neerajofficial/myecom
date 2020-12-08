import React from 'react'

import styles from './style.module.css'
import HeadSection from './../../organisms/headSection'
import CardSection from './../../organisms/cardSection'
import Introduction from './../../organisms/introduction'
// import Education from './../../organisms/education'
import Certificates from './../../organisms/certificates'

const About = () => {
	return (
		<div className={styles.about} id="about">
			<section className={styles.headSection}>
				<HeadSection text="About Me" />
			</section>
			<main className={styles.grid}>
				<div className={styles.container}>
					<CardSection />
				</div>
				<div className={styles.container}>
					<Introduction />
				</div>
			</main>
			{/*<section className={styles.certSection}>
				<Certificates />
			</section> */}
		</div>
	)
}

export default About