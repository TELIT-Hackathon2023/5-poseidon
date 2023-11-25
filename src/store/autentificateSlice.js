import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: true
};

const autentificateSlice = createSlice({
    name: 'autentificate',
    initialState,
    reducers: {
        setIsAuthenticated: (state) => { state.isAuthenticated = !state.isAuthenticated },
    }
});

const { reducer, actions } = autentificateSlice;

export default reducer;
export const { setIsAuthenticated } = actions;