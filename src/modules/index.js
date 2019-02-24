import { combineReducers } from 'redux';
import phonebook from 'modules/phonebook'
import {penderReducer } from 'redux-pender';
import 'semantic-ui-css/semantic.min.css';

export default combineReducers({
    phonebook,
    pender: penderReducer
})