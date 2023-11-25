import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import './yourSection.scss';

const YourSection = () => {
    const sectionMapping = { 1: 'A', 2: 'B', 3: 'C', 4: 'D' };
    const [sectionNumber, setSectionNumber] = useState(1);

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
    });

    function handlePrev() {
        setSectionNumber((prevNumber) => (prevNumber > 1 ? prevNumber - 1 : 4));
    }

    function handleNext() {
        setSectionNumber((prevNumber) => (prevNumber < 4 ? prevNumber + 1 : 1));
    }

    return (
        <div className="your-section" {...handlers}>
            <span>{sectionMapping[sectionNumber]}</span>
        </div>
    );
};

export default YourSection;