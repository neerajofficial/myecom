import React from 'react'

import styles from './style.module.css'

import Icon from './../../atoms/icon'
import Text from './../../atoms/text'

const CartBox = props => {
	const { iconName, text, totalAmount, clicked } = props;

	const cartStyle = [styles.cartBox, styles.grid].join(' ');

	return (
		<div className={cartStyle} onClick={clicked}>
			<div className={styles.flex}>
				<div>
					<Icon
						size="medium"
						theme="secondary"
						iconName={iconName} />
				</div>
				<div>
					<Text
						size="subHead"
						theme="dark"
						value={text} />
				</div>
			</div>
			<div className={styles.flex}>
				<Text
					size="subHead"
					theme="dark--round"
					value={`₹ ${totalAmount}`} />
			</div>
		</div>
	)
}

export default CartBox