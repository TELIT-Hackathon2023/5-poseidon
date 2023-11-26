import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false
};

const yourPlaceSlice = createSlice({
    name: 'yourPlace',
    initialState,
    reducers: {
        setShow: (state) => {
            state.show = !state.show;
        },
    }
});

export const { setShow } = yourPlaceSlice.actions;
export default yourPlaceSlice.reducer;