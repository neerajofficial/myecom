import * as actionTypes from './actionTypes'
import { updateItem } from './items'

const SHOW_BTN = true;

const updateTotalCost = newCost => ({
	type: actionTypes.UPDATE_COST,
	payload: newCost
})

const addedToCart = data => {
	return {
		type: actionTypes.ADD_ITEM,
		payload: data
	}
}

const getItem = (items, id) => {
	const item = items.find(el => el.id === id);
	return item;
}

export const addToCart = id => {
	return (dispatch, getState) => {
		const items = getState().items.items;
		const fetchItem = getItem(items, id);
		const count = 1;
		const fetchedItem = {...fetchItem, count};
		dispatch(addedToCart(fetchedItem))
		dispatch(updateItem(id, SHOW_BTN, count))
	}
}

const updatedCart = cartItems => {
	return {
		type: actionTypes.UPDATE_CART,
		payload: cartItems
	}
}

export const incrementCount = id => {
	return (dispatch, getState) => {
		const cItems = getState().cart.cartItems;
		const cartItems = [...cItems];
		const index = cartItems.findIndex(e => e.id === id);
		const item = cartItems[index];

		let cost = getState().cart.totalCost;
		let newCost = parseFloat(cost) + parseFloat(item.discountPrice); 

		item.count = parseInt(item.count) + 1;

		const newcount = item.count;
		cartItems[index] = {...item};

		dispatch(updatedCart(cartItems));		
		dispatch(updateItem(id, SHOW_BTN, newcount))
		dispatch(updateTotalCost(newCost));
	}
	
}

export const decrementCount = id => {
	return (dispatch, getState) => {
		const cItems = getState().cart.cartItems;
		let cartItems = [...cItems];
		const index = cartItems.findIndex(e => e.id === id);
		const item = cartItems[index];
		let newcount = parseInt(item.count);
		let show = SHOW_BTN;

		if (newcount <= 1) {
			newcount = 0;
			show = false;
			cartItems = cartItems.filter(e => e.id !== id);
		} else {
			item.count = newcount - 1;
			newcount = item.count;
			cartItems[index] = {...item};
		}		

		let cost = getState().cart.totalCost;
		let newCost = parseFloat(cost) - parseFloat(item.discountPrice); 

		dispatch(updatedCart(cartItems));		
		dispatch(updateItem(id, show, newcount));
		dispatch(updateTotalCost(newCost));
	}
}


export const removeCart = id => {
	return (dispatch, getState) => {
		const cItems = getState().cart.cartItems;
		let cartItems = [...cItems];

		const item = cartItems.find(e => e.id === id);
		
		let newcount = parseInt(item.count);
		const show = false;
		
		cartItems = cartItems.filter(e => e.id !== id);	

		let cost = getState().cart.totalCost;
		let newCost = parseFloat(cost) - (parseFloat(item.discountPrice) * newcount); 
		newcount = 0;
		
		dispatch(updatedCart(cartItems));		
		dispatch(updateItem(id, show, newcount));
		dispatch(updateTotalCost(newCost));
	}
}