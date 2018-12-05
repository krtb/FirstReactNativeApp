// actions are functions that our app calls
// will be a function that we want to return an object from

// action will then be used in reducer
// will determine how the store will

export const SWAP_CURRENCY = 'swap_currency';
export const CHANGE_CURRENCY_AMOUNT = 'change_currency_amount';

export const swapCurrency = () => ({
    type: SWAP_CURRENCY,
});

// passing in amount as part of the object creater, and will then return it as a second param 
// this will then be passed to our reducer 

// The parseFloat() function parses a string and returns a floating point number.
export const changeCurrencyAmount = (amount) => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount),
});


// actions tell redux that something happened
// doesn't tell redux what to do
// redux and redux store what to save as a result of action?
// this is the reducer's job
// takes the payload from an action,takes it as an input
// has access to redux store, modifies it based on the input
// returns new state to be used in our application. 