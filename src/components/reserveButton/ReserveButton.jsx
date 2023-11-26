import React from 'react';
import { useDispatch } from 'react-redux';
import { setShow } from './reservedButtonSlice'; // Шлях до вашого файлу з slice

import './reserveButton.scss';

const ReserveButton = () => {
    const dispatch = useDispatch();

    const handleReserveClick = () => {
        dispatch(setShow());
    };

    return (
        <button className='reserve-button' onClick={handleReserveClick}>
            Reserve a place
        </button>
    );
}

export default ReserveButton;