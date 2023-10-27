import { createSlice } from "@reduxjs/toolkit";
import { accountsRequestAsync } from "./accountsAction";

const initialState = {
    accounts: [],
    loading: false,
    error: "",
    status: "",
};

export const accountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers: {
        createAccount: (state, action) => {
            state.accounts.push(action.payload);
        },
        updateAccounts: (state, action) => {
            state.accounts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(accountsRequestAsync.pending, (state) => {
            state.status = "loading";
            state.error = "";
        });
        builder.addCase(accountsRequestAsync.fulfilled, (state, action) => {
            state.accounts = action.payload.accounts;
            state.error = "";
            state.status = "loaded";
        });
        builder.addCase(accountsRequestAsync.rejected, (state, action) => {
            state.error = action.error;
            state.status = "error";
        });
    },
});

export const { createAccount, updateAccounts } = accountsSlice.actions;
export default accountsSlice.reducer;
