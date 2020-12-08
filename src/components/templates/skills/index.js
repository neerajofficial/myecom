import React from 'react'

import styles from './style.module.css'
import TextBox from './../../atoms/textBox'
import HeadSection from './../../organisms/headSection'
import Badge from './../../atoms/badge'
import { SkillsData } from './skills'
// import Certificates from './../../organisms/certificates'

const Skills = () => {
	return (
		<div className={styles.skills} id="skills">
			<section className={styles.headSection}>
				<HeadSection text="My Skills" />
			</section>
			<div className={styles.skills_wrap}>
			{ SkillsData.map(skill => 
				<Badge 
					key={skill.id}
					text={skill.text} 
					theme={skill.theme} />
			)}
			</div>
			{/*<section className={styles.certSection}>
				<Certificates />
			</section> */}
		</div>
	)
}

export default Skills