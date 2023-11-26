import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = 'http://147.232.153.206:5000/api/users/me';

export const fetchUser = createAsyncThunk('autentificate/fetchUser', async () => {
    const token = localStorage.getItem('authToken');
    console.log('Here is your:', token)
    if (!token) {
        return { isAuthenticated: false };
    }

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            "token": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        return { isAuthenticated: false };
    }

    const data = await response.json();
    return { isAuthenticated: true, user: data };
});

const initialState = {
    isAuthenticated: false,
    user: null,
};

const autentificateSlice = createSlice({
    name: 'autentificate',
    initialState,
    reducers: {
        setIsAuthenticated: (state) => {
            state.isAuthenticated = !state.isAuthenticated;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            // Якщо fetchUser не вдалося, очистіть локальне сховище
            localStorage.removeItem('authToken');
            localStorage.removeItem('car');
        });
    },
});

export const { setIsAuthenticated } = autentificateSlice.actions;

export default autentificateSlice.reducer;