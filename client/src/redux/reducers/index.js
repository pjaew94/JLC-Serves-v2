import { combineReducers } from 'redux';
import user from './user';
import donation from './donation';
import stripe from './stripe'




export default combineReducers({
    user,
    donation,
    stripe
});