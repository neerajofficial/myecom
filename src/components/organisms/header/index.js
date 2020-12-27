import React from 'react'
import { connect } from 'react-redux'
import styles from './style.module.css'

import CartBox from './../../molecules/cartBox'
import Text from './../../atoms/text'

const Header = props => {
	const { toggleModal, totalCost } = props;
	const headerStyle = [styles.header, styles.grid].join(' ');

	return (
		<div className={headerStyle}>
			<div>
				<Text
					size="heading"
					theme="light"
					value="My-eCom" /> 
			</div>
			<div>
				<CartBox 
					text="Cart"
					iconName="shopping-cart"
					totalAmount={totalCost}
					clicked={toggleModal} />
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		totalCost: state.cart.totalCost
	}
}
export default connect(mapStateToProps)(Header);