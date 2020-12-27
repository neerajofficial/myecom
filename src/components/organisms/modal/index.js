import React from 'react'

import { connect } from 'react-redux'
import * as actions from './../../../store/actions'

import styles from './style.module.css'
import Icon from './../../atoms/icon'
import Text from './../../atoms/text'
import CartBox from './../../molecules/cartBox'
import CartCard from './../../molecules/cartCard'

const Modal = props => {
	const { clicked, cartItems, totalCost, incrementCount, decrementCount, removeCart } = props;

	const modalStyle = [styles.modal].join(' ');
	const headerStyle = [styles.flex, styles.headwrap].join(' ');
	const summaryStyle = [styles.summary].join(' ');

	const incremented = id => {
		incrementCount(id);
	}

	const decremented = id => {
		decrementCount(id);
	}

	const removeCartItem = id => {
		removeCart(id);
	}

	return (
		<div className={modalStyle}>
			<div className={headerStyle}>
				<div className={styles.flex}>
					<Icon
						size="medium"
						theme="secondary"
						iconName="shopping-cart" />
					<Text
						size="subHead"
						theme="dark"
						value="Cart" />
				</div>
				<div onClick={clicked}>
					<Icon
						size="medium"
						theme="secondary"
						iconName="times" />
				</div>
			</div>
			<div className={styles.listing}>
			{ cartItems && cartItems.map(item => (
				<CartCard 
					key={item.id}
					item={item}
					increment={incremented}
					decrement={decremented}
					removeCartItem={removeCartItem} />
			))}
			</div>
			<div className={summaryStyle}>
				<CartBox 
					text="Checkout"
					iconName="null"
					totalAmount={totalCost} />
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		cartItems: state.cart.cartItems,
		totalCost: state.cart.totalCost
	}
}

const mapDispatchToProps = dispatch => {
	return {
		incrementCount: id => dispatch(actions.incrementCount(id)),
		decrementCount: id => dispatch(actions.decrementCount(id)),
		removeCart: id => dispatch(actions.removeCart(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);