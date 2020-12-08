import React from 'react'

import styles from './style.module.css'

const EduCard = props => {
	const {name, no, date, imgurl, link} = props;
	return (
		<div className={styles.educard}>
			<div className={styles.card}>
				<div className={styles.date}>
					{date}
				</div>
				<div className={styles.img}>
					<img src={imgurl} alt={name} height="100px" />
				</div>
				<div className={styles.name}>
					{name}
				</div>
				<div className={styles.number}>
					Certificate No: {no}
				</div>
			</div>
		</div>
	)
}

export default EduCard