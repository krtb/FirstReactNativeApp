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
export const changeCurrencyAmount = (amount) => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount,
});