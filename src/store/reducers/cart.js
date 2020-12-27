import * as actionTypes from './../actions/actionTypes';

const INITIAL_STATE = {
	cartItems: [],
	totalCost: 0
}

const addItem = (state, action) => {
	const cost = state.totalCost + parseFloat(action.payload.discountPrice);
	return { 
		...state,
		cartItems: [...state.cartItems, action.payload],
		totalCost: cost
	}
}

const updateCart = (state, action) => {
	return {
		...state,
		cartItems: action.payload
	}
}

const updateCost = (state, action) => {
	return {
		...state,
		totalCost: action.payload
	}
}

const Cart = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case actionTypes.ADD_ITEM:
			return addItem(state, action);
		case actionTypes.UPDATE_CART:
			return updateCart(state, action);
		case actionTypes.UPDATE_COST:
			return updateCost(state, action);
		default:
			return state;
	}
}

export default Cart;