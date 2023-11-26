import { configureStore } from '@reduxjs/toolkit';
import autentificate from './autentificateSlice';
import reservedPlaces from '../components/placesMap/placesSplice'
import yourPlace from '../components/reserveButton/reservedButtonSlice'


const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: { autentificate, reservedPlaces, yourPlace },  // Змінено ім'я редюсера
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;