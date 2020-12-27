import React from 'react'

import styles from './style.module.css'

import Image from './../../atoms/image'
import Text from './../../atoms/text'
import Button from './../../atoms/button'
import Icon from './../../atoms/icon'

const IMAGE_PATH = '/images/items/';

const ItemCard = props => {
	const { clicked, increment, decrement, item } = props;

	const imageStyle = [styles.flex, styles.wrap].join(' ');
	const nameStyle = [styles.wrap, styles.name].join(' ');
	const actionStyle = [styles.flex, styles.wrap, styles.action].join(' ');

	return (
		<div className={styles.itemcard} draggable="false">
			<div className={styles.flex}>
				<div>
					<Text 
						size="normal"
						theme="dark"
						value={`₹ ${item.discountPrice}`} />
					<Text 
						size="normal"
						theme="strike"
						value={`₹ ${item.price}`} />
				</div>
				<div>
					<Text 
						size="normal"
						theme="dark--round"
						value={item.quantity} />
				</div>
			</div>
			<div className={imageStyle}>
				<Image 
					url={`${IMAGE_PATH + item.imageUrl}`}
					alt="my product"
					height="100px"
					widthe="100px" />
			</div>
			<div className={nameStyle}>
				<Text 
					size="normal"
					theme="dark"
					value={item.name} />
			</div>
			{ item.showAdd 
				? <div className={actionStyle}>
					<Icon
						size="small"
						theme="secondary--round"
						iconName="plus"
						onClick={() => increment(item.id)} />
					<Text 
						size="normal"
						theme="dark"
						value={item.count} />
					<Icon
						size="small"
						theme="secondary--round"
						iconName="minus"
						onClick={() => decrement(item.id)} />
				</div>
				: <div className={actionStyle}>
					<Button 
						size="normal"
						theme="secondary--round"
						value="Add"
						clicked={() => clicked(item.id)} />
				</div>
				
			}
		</div>
	)
}

export default ItemCard