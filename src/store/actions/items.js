import * as actionTypes from './actionTypes'
import axios from './../../apis/items'

const showButton = (cartItems, id, cb) => {
	const item = cartItems.find(el => el.id === id);
	if (item) return cb(item) || null;
}

const itemsManipulation = (data, cartItems) => {
	const fetchedOrders = [];
	for (let key in data) {
		fetchedOrders.push({
			...data[key],
			id: key,
			showAdd: showButton(cartItems, key, item => {
				if(!item) return false;
				return true;
			}),
			count: showButton(cartItems, key, item => {
				if(!item) return 0;
				return item.count;
			})
		});
	}
	return fetchedOrders;
}

export const setItems = (data, cartItems) => {
	const itemsList = itemsManipulation(data, cartItems); 
	return {
		type: actionTypes.SET_ITEMS,
		items: itemsList
	}
}

export const fetchingFailed = err => {
	return {
		type: actionTypes.FETCHING_ERROR,
		error: err
	}
}

export const fetchItems = category => {
	return (dispatch, getState) => {
		const cartItems = getState().cart.cartItems;
		axios.get(`/${category}.json`)
			.then(resp => dispatch(setItems(resp.data, cartItems)))
			.catch(err => dispatch(fetchingFailed(err.message)))
	}
}

const updateItems = updatedItems => {
	return {
		type: actionTypes.UPDATE_ITEM,
		payload: updatedItems
	}
}

export const updateItem = (id, btnStatus, count) => {
	return (dispatch, getState) => {
		const items = getState().items.items;

		const updatedItems = [...items];
		const itemIndex = items.findIndex(el => el.id === id);

		const item = {...items[itemIndex]};
		item.count = count;

		if (btnStatus) item.showAdd = true;
		if (!btnStatus) item.showAdd = false;

		updatedItems[itemIndex] = {...item};

		dispatch(updateItems(updatedItems))
	}	
}