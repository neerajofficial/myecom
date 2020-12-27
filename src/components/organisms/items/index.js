import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import * as actions from './../../../store/actions'

import styles from './style.module.css'

import ItemCard from './../../molecules/itemCard'

const Items = React.memo(props => {
	const [itemsList, setItems] = useState(null);

	const { 
		onLoad, pathname, items, 
		addToCartItem, incrementCount, decrementCount 
	} = props;

	useEffect(() => {
		onLoad(pathname);
	}, [onLoad, pathname]);

	useEffect(() => {
		setItems(items)
	}, [items]);

	const addToCart = (id) => {
		addToCartItem(id);
	}

	const incremented = id => {
		incrementCount(id);
	}

	const decremented = id => {
		decrementCount(id);
	}

	return (
		<div className={styles.items}>
		{ itemsList && itemsList.map(item => (
			<div className={styles.itemwrap} key={item.id}>
				<ItemCard
					clicked={addToCart}
					increment={incremented}
					decrement={decremented}
					item={item} />
			</div>
		))}
		</div>
	)
})

const mapStateToProps = state => {
	return {
		items: state.items.items
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoad: category => dispatch(actions.fetchItems(category)),
		addToCartItem: id => dispatch(actions.addToCart(id)),
		incrementCount: id => dispatch(actions.incrementCount(id)),
		decrementCount: id => dispatch(actions.decrementCount(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);