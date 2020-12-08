import React from 'react'

import { EduData } from './eduData'
import styles from './style.module.css'
import TextBox from './../../atoms/textBox'
import EduBox from './../../molecules/eduBox'

const Education = props => {
	return (
		<div className={styles.education}>
			<TextBox theme="subHead">
				Education
			</TextBox>
			<section className={styles.container}>
				{EduData.map(edu => (
					<EduBox 
						key={edu.id}
						date={edu.date}
						percentage={edu.percentage}
						institute={edu.institute}
						stream={edu.stream} />
				))}
			</section>
		</div>
	)
}

export default Education