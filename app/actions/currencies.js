// actions are functions that our app calls
// will be a function that we want to return an object from

// action will then be used in reducer
// will determine how the store will

export const SWAP_CURRENCY = 'swap_currency';

export const swapCurrency = () => ({
    type: SWAP_CURRENCY,
});