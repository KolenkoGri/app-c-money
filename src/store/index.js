import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { tokenReducer } from "./token/tokenReducer";
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
