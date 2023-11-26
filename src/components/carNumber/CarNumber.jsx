import { FaCar } from "react-icons/fa";

import './carNumber.scss';

const carNumber = localStorage.getItem('car')

const CarNumber = () => {
    return (
        <div className="container">
            <div className="car-number">
                <FaCar className="car-number__icon" />
                <div className="car-number__content">{carNumber}</div>
            </div>
        </div>
    )
}

export default CarNumber;