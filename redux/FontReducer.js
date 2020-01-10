import { combineReducers } from 'redux';

const INITIAL_STATE = {
    OpenSansLoaded: false,
}

const fontReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_OPENSANS':
            return { OpenSansLoaded: true };
        default:
            return state
    }
};

export default combineReducers({
    fonts: fontReducer,
});

export const loadOpenSans = () => ({
    type: 'LOAD_OPENSANS',
});
