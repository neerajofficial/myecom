import React from 'react'

import styles from './style.module.css'
import TextBox from './../../atoms/textBox'
import HeadSection from './../../organisms/headSection'

const Work = () => {
	return (
		<div className={styles.work} id="work">
			<section className={styles.headSection}>
				<HeadSection text="My Work" />
			</section>
			
		</div>
	)
}

export default Work