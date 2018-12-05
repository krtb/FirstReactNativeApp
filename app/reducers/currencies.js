import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY } from '../actions/reducers';
// can use dif actio types in reducer, based off of which action type
// which reducer function should we actually run.

const initialState = {};

// after each subsequent action it called, it will have the most recent state 
// as each action is called, they will go ahead and modify the state

// switch statement on 'action.type' because each action going out will be unique 
const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_CURRENCY_AMOUNT:
        case SWAP_CURRENCY:
        default:
            return state;
    }
}

export default reducer;