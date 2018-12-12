import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY} from '../actions/currencies';
// can use dif actio types in reducer, based off of which action type
// which reducer function should we actually run.

// const initialState = {
//     baseCurrency: 'USD',
//     quoteCurrency: 'GBP',
//     amount: 100,
//     conversions: {}, 
// };

// added new currency, to replace above initial state
const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {
        USD: {
            isFetching: false,
            base: 'USD',
            date: '2017-05-31',
            rates: {
                AUD: 1.3416,
                BGN: 1.743,
                BRL: 3.2515,
                CAD: 1.3464,
                CHF: 0.97104,
                CNY: 6.813,
                CZK: 23.547,
                DKK: 6.6302,
                GBP: 0.77858,
                HKD: 7.7908,
                HRK: 6.6068,
                HUF: 273.77,
                IDR: 13308,
                ILS: 3.5431,
                INR: 64.463,
                JPY: 110.86,
                KRW: 1118.4,
                MXN: 18.765,
                MYR: 4.281,
                NOK: 8.4117,
                NZD: 1.4071,
                PHP: 49.77,
                PLN: 3.7173,
                RON: 4.0687,
                RUB: 56.774,
                SEK: 8.6942,
                SGD: 1.3829,
                THB: 34.07,
                TRY: 3.5366,
                ZAR: 13.133,
                EUR: 0.89119,
            },
        },
    },
};

// after each subsequent action it called, it will have the most recent state 
// as each action is called, they will go ahead and modify the state

// switch statement on 'action.type' because each action going out will be unique
// reducers are normally pure functions, not modifying state

// ...() before code is use of DESTRUCTURING, creates a copy of state below
// at start of switch statement, action.type grabs the particular type
// we then reach inside of the object, with action.amount
const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.amount || 0
            }
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency,
            }
        default:
            return state;
    }
}

export default reducer;