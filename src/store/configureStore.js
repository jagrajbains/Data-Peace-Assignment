import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchUsers, requestUsers } from '../reducers/reducers';
import thunkMiddleware from 'redux-thunk';

export default () => {
    const rootReducers = combineReducers({ searchUsers, requestUsers });
    const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

    return store;

}