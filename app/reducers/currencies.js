import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY, CHANGE_BASE_CURRENCY, CHANGE_QUOTE_CURRENCY} from '../actions/currencies';
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
            // set to true to grab the latest rates
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

// helper function to set nested data, to be reused later on
const setConversions = (state, action) => {
    let conversion = {
        // when we are fetching, will change base currency
        // below are the same property values as in the initial state object above
        isFetching: true,
        date: '',
        rates: {},
    }

    // if we don't have the below info, will default to above's basic-static info
    // checking object in our existing/initial state
    if (state.conversions[action.currency]) {
        // will copy over the information that's already there
        conversion = state.conversions[action.currency]
        // copy what's already there, and if else, will default to basic static information in coversion object
    }
    return {
        // using destructuring to copy over all existing information
        // don't want to override any existing user information
        ...state.conversions,
        // update what the current new base currency is
        // is going to be whatever we have setup in our conversion variable
        [action.currency]: conversion
    }
};

// after each subsequent action it called, it will have the most recent state 
// as each action is called, they will go ahead and modify the state

// switch statement on 'action.type' because each action going out will be unique
// reducers are normally pure functions, not modifying state

// ...() before code is use of DESTRUCTURING, creates a copy of state below
// at start of switch statement, action.type grabs the particular type
// we then reach inside of the object, with action.amount
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
    // returning new objects because this needs to be a pure function
      return { 
        ...state, 
        amount: action.amount || 0 
    };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        // passing currency as an additional payload 
        baseCurrency: action.currency,
        conversions: setConversions(state, action),
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversions(state, action),
      };
    default:
      return state;
  }
};
