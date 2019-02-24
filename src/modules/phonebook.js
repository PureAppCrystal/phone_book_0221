import { handleActions, createAction } from 'redux-actions';
import { Map, List} from 'immutable';

const CHANGE = "CHANGE"
const INSERT = "INSERT"
const REMOVE = "REMOVE"
const SEARCH = "SEARCH"
const UPDATE = "UPDATE"

export const change = createAction(CHANGE);
export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);
export const search = createAction(SEARCH);
export const update = createAction(UPDATE);


const getId = (state) => {
    let nowId = state.get('id');
    return  ++nowId;
}

const initialState = Map({
    id: 3,
    name: '',
    number: '',
    //phoneList: List([]),
    phoneList: List([ 
        Map({
            id: 1,
            name: '리액트',
            number: '02-1234-3357'
        }),
        Map({
            id: 12,
            name: '후니',
            number: '010-1234-1234'
        }),
        Map({
            id: 3,
            name: '라이언',
            number: '010-4456-5567'
        })
    ]),
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
        const {id} = action.payload;

        const index = state.get('phoneList').findIndex(phoneList => phoneList.get('id') === id)
        const newState = state.set('phoneList', state.get('phoneList').delete(index))   
        return newState;
    },
    [SEARCH]: (state, action) => {
        const {name} = action.payload;
        let newState
        if ( name !== undefined && name.length > 0) {
            const searchList = state.get('phoneList').filter( phoneList => 
                phoneList.get('name').search(name) >= 0
            )
            newState = state.set('searchList', searchList).set('searchState', true);
        } else {
            newState = state.set('searchState', false);
        }

        return newState;
    },
    [UPDATE] : (state, action) => {

        const { id } = action.payload;
        const phoneList = state.get('phoneList');
        const newPhoneList = phoneList.map(phone => 
            phone.get('id').toString() === id ? Map({ ...phone,  ...action.payload}) : phone
        )

        const newState = state.set('phoneList', newPhoneList)

        
        return newState;
    }
}, initialState)