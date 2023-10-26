import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { tokenReducer } from "./token/tokenReducer";
import { userReducer } from "./user/userReducer";
import accountsSlice from "./accounts/accountsSlice";
import { currenciesReducer } from "./currencies/currenciesReducer";

const rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer,
    accounts: accountsSlice,
    currencies: currenciesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
