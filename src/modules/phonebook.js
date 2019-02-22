import { handleActions, createAction } from 'redux-actions';



const INSERT = "INSERT"
const REMOVE = "REMOVE"

export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);


const initialState = {
    id: 0,
    name: '',
    number: '',
    phoneList: [],
    searchList: [],
    searchState: false
}

export default handleActions({
    [INSERT]: (state, action) => {
        //
        console.log("====== handleAction/INSERT ======")
        console.log("state : " , state)
        console.log("action : ", action)
        return state
    },
    [REMOVE]: (state, action) => {
        //
        return state
    }
}, initialState)