import * as actionTypes from './../actions/actionTypes';

const INITIAL_STATE = {
	items: [],
	error: null
}

const setItems = (state, action) => {
	return { 
		...state,
		items: action.items
	}
}

const updateItem = (state, action) => {
	return {
		...state,
		items: action.payload
	};
}	

const fetchingError = (state, action) => {
	return {
		...state,
		error: action.error
	}
}

const Items = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case actionTypes.SET_ITEMS:
			return setItems(state, action);
		case actionTypes.UPDATE_ITEM:
			return updateItem(state, action);
		case actionTypes.FETCHING_ERROR: 
			return fetchingError(state, action);
		default:
			return state;
	}
}

export default Items;