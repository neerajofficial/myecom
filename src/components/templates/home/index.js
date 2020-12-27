import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styles from './style.module.css'

import Header from './../../organisms/header'
import Items from './../../organisms/items'
import Navigation from './../../organisms/navigation'
import Modal from './../../organisms/modal'
import Backdrop from './../../organisms/backdrop'

const Home = React.memo(props => {
	const { 
		modalShow, 
		toggleModal, 
		navLinks
	} = props;

	return (
		<div className={styles.home}>
			{ modalShow 
				? (
					<React.Fragment>
					<Backdrop clicked={toggleModal} />
					<Modal clicked={toggleModal} />
					</React.Fragment>
				)
				: null 
			}
			<Header toggleModal={toggleModal} />
			
			<div className={styles.grid}>
				<Navigation 
					navLinks={navLinks} />
				<Switch>
					{ navLinks.map(nav => (
						<Route
							key={nav.id}
							path={`/${nav.categoryName}`}
							render={props => (
								<Items 
									pathname={nav.categoryName}
									{...props} />	
							)} />
					))}
					<Redirect to="/fruits" />
				</Switch>
			</div>
		</div>
	)
})

export default Home