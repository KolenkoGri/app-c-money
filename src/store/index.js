import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { tokenReducer } from "./token/tokenReducer";
import { userReducer } from "./user/userReducer";
import accountsSlice from "./accounts/accountsSlice";

const rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer,
    accounts: accountsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
