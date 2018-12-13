import { CHANGE_PRIMARY_COLOR } from '../actions/theme';

const initialState = {
    // this property is unique to this initial state,
    // aligns with the color we've been using: $primaryBlue
    primaryColor: '#4F6D7A',
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case CHANGE_PRIMARY_COLOR:
            return {
                ...state,
                primaryColor: action.color,
            };
        default:
            return state;
    }
}

// simplest version of wiring up our redux store