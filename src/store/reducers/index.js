import { combineReducers } from 'redux';

import Cart from './cart'
import Items from './items'

const Reducers = combineReducers({
	cart: Cart,
	items: Items
})

export default Reducers;