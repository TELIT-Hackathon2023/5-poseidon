import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reservedPlaces: [{ id: 1, chosen: false }, {
        id: 2,
        chosen: false
    }, { id: 3, chosen: false }, { id: 4, chosen: false }, { id: 5, chosen: false }, { id: 6, chosen: false }, { id: 7, chosen: false }, { id: 8, chosen: false }, { id: 9, chosen: false }, { id: 10, chosen: false }, { id: 11, chosen: false }, { id: 12, chosen: false }, { id: 13, chosen: false }, { id: 14, chosen: false }, { id: 15, chosen: false },]
};

const placesSlice = createSlice({
    name: "reservedPlaces",
    initialState,
    reducers: {
        addReservedPlace: (state, action) => {
            const placeId = action.payload;
            const place = state.reservedPlaces.find((p) => p.id === placeId);

            // Перевірка, чи місце не обрано
            if (place && !place.chosen) {
                place.chosen = true;
            }
        },
    },
});

const { reducer, actions } = placesSlice;

export default reducer;
export const { addReservedPlace } = actions;