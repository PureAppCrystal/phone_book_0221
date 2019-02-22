import { combineReducers } from 'redux';
import phonebook from 'modules/phonebook'
import {penderReducer } from 'redux-pender';

export default combineReducers({
    phonebook,
    pender: penderReducer
})