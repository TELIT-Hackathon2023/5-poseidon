import React from "react";
import { useDispatch } from "react-redux";
import { addReservedPlace } from "./placesSplice";
import { useSelector } from 'react-redux';

import { MdLocalParking } from "react-icons/md";

import "./placesMap.scss";

const Place = () => {
    const dispatch = useDispatch();

    const reservedPlaces = useSelector(state => state.reservedPlaces.reservedPlaces)

    const handlePlaceClick = (placeId) => {
        dispatch(addReservedPlace(placeId));
    };

    return (
        reservedPlaces.map((data) => (
            <div
                key={data.id}
                className={`place-box ${data.chosen ? "chosen" : ""}`}
                onClick={() => handlePlaceClick(data.id)}
            >
                <MdLocalParking style={{ fontSize: '2em' }} />
            </div>
        ))
    );
};

const PlacesMap = () => {
    return (
        <section className="places-map">
            <div className="places-map__grid">
                <Place />
            </div>
        </section>
    );
};

export default PlacesMap;