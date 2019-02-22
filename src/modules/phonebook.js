import { handleActions, createAction } from 'redux-actions';
import { Map, List} from 'immutable';

const CHANGE = "CHANGE"
const INSERT = "INSERT"
const REMOVE = "REMOVE"

export const change = createAction(CHANGE);
export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);


const getId = (state) => {
    let nowId = state.get('id');
    return  ++nowId;
}

const initialState = Map({
    id: 0,
    name: '',
    number: '',
    phoneList: List([]),
    searchList: List([]),
    searchState: false
})

export default handleActions({
    [CHANGE]: (state, action) => {
        //
        const param = action.payload;
        const newState = state.merge(param)
        return newState;
    },
    [INSERT]: (state, action) => {
        //
        const {name, number } = action.payload;
        const newId = getId(state)
        const newState = state.set('phoneList', state.get('phoneList').push(Map({
            id: newId,
            name: name,
            number: number
        }))).set('id', newId)
        return newState;
    },
    [REMOVE]: (state, action) => {
        //
        return state;
    }
}, initialState)