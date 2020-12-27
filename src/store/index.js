import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import Reducers from './reducers'


const middlewares = [reduxThunk];
const Store  = createStore(Reducers, applyMiddleware(...middlewares));

export default Store;


