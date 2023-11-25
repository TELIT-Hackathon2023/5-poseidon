import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import './yourPlace.scss';

const YourPlace = () => {
    const [placeNumber, setPlaceNumber] = useState(1);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrev(),
    });

    const handlePrev = () => {
        if (placeNumber > 1) {
            setPlaceNumber(placeNumber - 1);
        } else {
            setPlaceNumber(50);
        }
    };

    const handleNext = () => {
        if (placeNumber < 50) {
            setPlaceNumber(placeNumber + 1);
        } else {
            setPlaceNumber(1);
        }
    };

    return (
        <div className="your-section your-place" {...handlers}>
            <span>{placeNumber}</span>
        </div>
    );
};

export default YourPlace;