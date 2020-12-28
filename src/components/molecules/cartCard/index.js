import React from 'react'

import styles from './style.module.css'

import Image from './../../atoms/image'
import Text from './../../atoms/text'
import Icon from './../../atoms/icon'

const IMAGE_PATH = '/images/items/';

const CartCard = props => {
	const { item, increment, decrement, removeCartItem } = props;

	const imageStyle = [styles.flex, styles.wrap].join(' ');
	const actionStyle = [styles.actionwrap].join(' ');

	return (
		<div className={styles.cartcard}>
			<div className={actionStyle}>
				<div className={styles.actionBtn}>
					<div className={styles.icon}>
					<Icon
						size="small"
						theme="secondary--round"
						iconName="plus"
						onClick={() => increment(item.id)} />
					</div>
					<div>
						<Text 
							size="normal"
							theme="light"
							value={item.count} />
					</div>
					<div className={styles.icon}>
						<Icon
						size="small"
						theme="secondary--round"
						iconName="minus"
						onClick={() => decrement(item.id)} />
					</div>
				</div>
			</div>
			<div className={imageStyle}>
				<Image 
					url={`${IMAGE_PATH + item.imageUrl}`}
					alt="my product"
					height="100px"
					widthe="100px" />
			</div>
			<div className={styles.detailwrap}>
				<div>
					<Text 
						size="normal"
						theme="dark"
						value={item.name} />
				</div>
				<div>
					<Text 
						size="subHead"
						theme="secondary"
						value={`₹ ${item.discountPrice}`} />
				</div>
				<div>
					<Text 
						size="small"
						theme="dark"
						value={`${item.count} x ${item.quantity}`} />
				</div>
			</div>
			<div className={styles.flex}>
				<div>
					<Text 
						size="normal"
						theme="dark"
						value={`₹ ${item.count * item.discountPrice}`} />
				</div>
			</div>
			
			<div className={styles.removeBtn}>
				<Icon
					size="small"
					theme="secondary--round"
					iconName="times"
					onClick={() => removeCartItem(item.id)} />
			</div>
			
		</div>
	)
}

export default CartCard