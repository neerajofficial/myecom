import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

import styles from './style.module.css'
import TextBox from './../../atoms/textBox'
import HeadSection from './../../organisms/headSection'
import SocialIcon from './../../atoms/socialIcon'
import email from './../../../assets/images/ico/email.png'
import insta from './../../../assets/images/ico/insta.png'
import linkedin from './../../../assets/images/ico/li.png'
import github from './../../../assets/images/ico/git.png'
import logoIcon from './../../../assets/images/logoIcon.png'

const Contact = () => {
	return (
		<div className={styles.contact} id="contact">
			<section className={styles.headSection}>
				<HeadSection text="Contact Me" />
			</section>
			<main className={styles.grid}>
				<div className={styles.flexWrap}>
					<SocialIcon
						pathUrl={email} 
						nameImg="Email"
						height="60px" />
					<TextBox theme="subHead">
						singh4neeraj@gmail.com
						</TextBox>
				</div>
				<div className={styles.flexWrap}>
					<SocialIcon
						pathUrl={insta} 
						nameImg="Instagram"
						height="60px" />
					<SocialIcon
						pathUrl={linkedin} 
						nameImg="LinkedIn"
						height="60px" />
					<SocialIcon
						pathUrl={github} 
						nameImg="Github"
						height="60px" />
				</div>
			</main>
			<footer className={styles.bottom}>
				<span onClick={() => scroll.scrollToTop()}>
				<SocialIcon 
					 
					pathUrl={logoIcon}
					nameImg="Neeraj"
					height="50px" />
				</span>
			</footer>
		</div>
	)
}

export default Contact