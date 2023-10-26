const initialState = {
    user: false,
    currencies: {},
};

const UPDATE_USER = "UPDATE_USER";
const CLEAR_USER = "CLEAR_TOKEN";
const UPDATE_USER_NAME = "UPDATE_USER_NAME";
const UPDATE_USER_CURRENCIES = "UPDATE_USER_CURRENCIES";

export const updateUser = (user) => ({
    type: UPDATE_USER,
    user,
});

export const updateUserCurrencies = (currencies) => ({
    type: UPDATE_USER_CURRENCIES,
    currencies,
});

export const clearUser = () => ({
    type: CLEAR_USER,
    user: false,
});

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                user: action.user,
            };

        case CLEAR_USER:
            return {
                ...state,
                user: action.user,
            };

        case UPDATE_USER_NAME:
            return {
                ...state,
                user: action.user,
            };

        case UPDATE_USER_CURRENCIES:
            return {
                ...state,
                currencies: action.currencies,
            };

        default:
            return state;
    }
};
