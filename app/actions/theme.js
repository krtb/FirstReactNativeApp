// just like in other functions, want to know what color is going to be used
// this is why we pass it in as a param

// will be adding a variable with an explicit name to make debugging easier
export const CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR';

// want to dispatch this function from the theme screen when one of the colors are pressed
export const changePrimaryColor = (color) => ({
    // we will be accesing the type property
    type: CHANGE_PRIMARY_COLOR,
    // additional piece of info for this, will be actual color that we want to change it to
    color,
});