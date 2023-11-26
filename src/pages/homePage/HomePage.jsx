import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/autentificateSlice';
import { Navigate } from 'react-router-dom';

import CarNumber from "../../components/carNumber/CarNumber";
import ReserveButton from "../../components/reserveButton/ReserveButton";
import YourSection from "../../components/yourSection/YourSection";
import YourPlace from "../../components/yourPlace/YourPlace";

import './homePage.scss';

const HomePage = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.autentificate.isAuthenticated);
    console.log(isAuthenticated)

    useEffect(() => {
        // Перевірте, чи користувач авторизований перед викликом запиту
        if (isAuthenticated) {
            // Викликайте вашу асинхронну дію, наприклад, fetchUser
            dispatch(fetchUser());
        }
    }, [dispatch, isAuthenticated]);

    // Якщо користувач не авторизований, перенаправте його на сторінку логіну
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }


    return (
        <section className="home-page container">
            <CarNumber />
            <div className="home-page__wrapper">
                <ReserveButton />
                <div className="home-page__placeWrapper">
                    <YourSection />
                    <YourPlace />
                </div>
            </div>
        </section>
    );
};

export default HomePage;