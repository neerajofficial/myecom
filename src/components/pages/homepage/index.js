import React, { useState } from 'react'
import { connect } from 'react-redux'
import ErrorPage from './../error'
import Home from './../../templates/home'
import { navLinks } from './navLinks'

const HomePage = props => {
	const { error } = props;

	const [modalShow, setModal] = useState(false);
	
	const toggleModal = () => setModal(!modalShow);

	return (
	<React.Fragment>
		{ error 
			? <ErrorPage text={error} />
			: <Home 
				toggleModal={toggleModal}
				modalShow={modalShow}
				navLinks={navLinks} /> 
		}
	</React.Fragment>
	)
}

const mapStateToProps = state => {
	return {
		error: state.items.error
	}
}

export default connect(mapStateToProps)(HomePage);